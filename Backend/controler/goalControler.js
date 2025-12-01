const Goal = require('../models/goalModel');
const User = require('../models/userModel');
// @desc get all goals
// @route GET /api/goals
// @access public
const getGoals =async (req,res)=>{
    const goals = await Goal.find({user : req.user.id});
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
        text : req.body.text,
        user :req.user.id
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

    //check for user 
    const user=await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found ')
    }

    //mack sure the logged user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
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
    console.log(goal)

    //check for user 
    const user=await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found ')
    }
    console.log(req.user.id)
    //mack sure the logged user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
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
