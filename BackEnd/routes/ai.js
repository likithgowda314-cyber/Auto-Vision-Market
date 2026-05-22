const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const upload = multer({ dest: 'uploads/' });

router.post('/detect-damage', upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image asset detected.' });

  try {
    const form = new FormData();
    form.append('image', fs.createReadStream(req.file.path), req.file.originalname);

    const aiResponse = await axios.post('http://localhost:5000/api/detect-damage', form, {
      headers: form.getHeaders()
    });

    fs.unlinkSync(req.file.path);
    res.json(aiResponse.data);
  } catch (err) {
    if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    res.status(500).json({ error: 'AI processing module offline.' });
  }
});

module.exports = router;
