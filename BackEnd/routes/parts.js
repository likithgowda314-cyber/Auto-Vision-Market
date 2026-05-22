const express = require('express');
const router = express.Router();
const partsController = require('../controllers/partsController');

router.get('/', partsController.getAllParts);
router.get('/top-selling', partsController.getTopSellingParts);
router.get('/:id', partsController.getPartById);
router.get('/vehicle/:make/:model/:year', partsController.getPartsByVehicle);
router.get('/price-comparison/:id', partsController.getPriceComparison);

module.exports = router;
