const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getDb } = require('../db');

router.post('/', auth, async (req, res) => {
  try {
    const db = await getDb();
    const { total_amount, shipping_address, items } = req.body;
    
    await db.run('BEGIN TRANSACTION');
    try {
      const orderResult = await db.run(
        `INSERT INTO orders (user_id, total_amount, shipping_address, status) VALUES (?, ?, ?, 'Pending')`,
        [req.user.id, total_amount, shipping_address]
      );
      const orderId = orderResult.lastID;

      for (const item of items) {
        await db.run(
          `INSERT INTO order_items (order_id, part_id, quantity, price) VALUES (?, ?, ?, ?)`,
          [orderId, item.part_id, item.quantity, item.price]
        );
      }

      await db.run('COMMIT');
      res.status(201).json({ orderId, status: 'Order initialized' });
    } catch (txErr) {
      await db.run('ROLLBACK');
      throw txErr;
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/user/:userId', auth, async (req, res) => {
  try {
    if (parseInt(req.params.userId) !== req.user.id) return res.status(403).json({ error: 'Unauthorized access.' });
    const db = await getDb();
    const rows = await db.all('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [req.user.id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
