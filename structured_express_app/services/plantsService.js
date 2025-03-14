let express = require('express');
let router = express.Router();
let path=require('path');
let plants = require('../controllers/plantController.js');  // Updated path for Plants controller

router.get('/allplants', plants.getAll);
router.get('/plant/:id', plants.getOne);
router.post('/plant', plants.createOne);
router.put('/plant/:id', plants.updateOne);
router.delete('/plant/:id', plants.deleteOne);

module.exports = router;
