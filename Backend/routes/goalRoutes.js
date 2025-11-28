const express = require('express');
const router = express.Router();
const {getGoals,getGoal,setGoal,updateGoal,deleteGoal} = require('../controler/goalControler');


router.route('/').get(getGoals).post(setGoal);
router.route('/:id').get(getGoal).put(updateGoal).delete(deleteGoal);

// router.get('/', getGoals);
// router.get('/:id', getGoal);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;