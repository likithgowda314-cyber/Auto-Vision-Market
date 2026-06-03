const express = require('express');
const router = express.Router();
const partsController = require('../controllers/partsController');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage });

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.id };
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

router.get('/', partsController.getAllParts);
router.get('/refurbished', partsController.getRefurbishedParts);
router.get('/top-selling', partsController.getTopSellingParts);
router.get('/:id', partsController.getPartById);
router.get('/vehicle/:make/:model/:year', partsController.getPartsByVehicle);
router.get('/price-comparison/:id', partsController.getPriceComparison);

router.post('/sell', authMiddleware, upload.single('image'), partsController.sellPart);

module.exports = router;
