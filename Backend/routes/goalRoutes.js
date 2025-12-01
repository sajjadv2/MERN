const express = require('express');
const router = express.Router();
const {getGoals,getGoal,setGoal,updateGoal,deleteGoal} = require('../controler/goalControler');
const {protect} = require('../Middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,setGoal);
router.route('/:id').get(protect,getGoal).put(protect,updateGoal).delete(protect,deleteGoal);

// router.get('/', getGoals);
// router.get('/:id', getGoal);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;