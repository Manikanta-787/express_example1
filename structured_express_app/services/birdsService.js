let express=require('express');
let router=express.Router();
let path=require('path');
let birds=require('../controllers/birdController');

router.get('/allbirds',birds.getAll);
router.get('/bird/:id',birds.getOne);
router.post('/bird',birds.createOne);
router.put('/bird/:id',birds.updateOne);
router.delete('/bird/:id',birds.deleteOne);

module.exports=router;