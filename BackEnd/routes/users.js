const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb } = require('../db');

router.post('/register', async (req, res) => {
  try {
    const db = await getDb();
    const { email, password, name, phone, city } = req.body;
    if (!email || !password || !name) return res.status(400).json({ error: 'Missing registration details.' });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    try {
      const result = await db.run(
        `INSERT INTO users (email, password_hash, name, phone, city) VALUES (?, ?, ?, ?, ?)`,
        [email, passwordHash, name, phone, city || 'Bengaluru']
      );
      // sqlite doesn't return inserted rows directly, we can get lastID
      const user = await db.get(`SELECT id, email, name FROM users WHERE id = ?`, [result.lastID]);
      res.status(201).json(user);
    } catch (dbErr) {
      if (dbErr.message.includes('UNIQUE constraint failed') || dbErr.code === '23505') {
        return res.status(400).json({ error: 'Email identifier already in use.' });
      }
      throw dbErr;
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const db = await getDb();
    const { email, password } = req.body;
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
    if (!user) return res.status(401).json({ error: 'Invalid credentials.' });

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials.' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
