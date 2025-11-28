const Goal = require('../models/goalModel');
// @desc get all goals
// @route GET /api/goals
// @access public
const getGoals =async (req,res)=>{
    const goals = await Goal.find();
    res.status(200).json(goals);
}

// @desc get single goal
// @route GET /api/goals/:id
// @access public
const getGoal=async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('goal not found');
    }
    res.status(200).json(goal);
}

//@desc set a new goal
//@route POST /api/goals
//@access public
const setGoal=async (req,res)=>{
    console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field');
    }

    const goal = await Goal.create({
        text : req.body.text
    });

    res.status(200).json(goal);
}   

//@desc update a goal
//@route PUT /api/goals/:id
//@access public
const updateGoal=async(req,res)=>{
    const goal= await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found !')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true} )
    res.status(200).json(updatedGoal);
}

//@desc delete a goal
//@route DELETE /api/goals/:id
//@access public
const deleteGoal=async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found!')
    }
    await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({message : `delete goal ${req.params.id}`});
}   



module.exports={
    getGoals,
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
};
