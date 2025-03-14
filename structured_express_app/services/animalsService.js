let express = require('express');
let router = express.Router();
path=require('path');
let animals = require('../controllers/animalController.js');  // Updated path for Animals controller

router.get('/allanimals', animals.getAll);
router.get('/animal/:id', animals.getOne);
router.post('/animal', animals.createOne);
router.put('/animal/:id', animals.updateOne);
router.delete('/animal/:id', animals.deleteOne);

module.exports = router;
