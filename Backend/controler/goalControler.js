// @desc get all goals
// @route GET /api/goals
// @access public
const getGoals =async (req,res)=>{
    res.status(200).json({ message: 'get Goals' });
}

// @desc get single goal
// @route GET /api/goals/:id
// @access public
const getGoal=async (req,res)=>{
    res.status(200).json({ message: `goal id is ${req.params.id}` });
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

    res.status(200).json({ message: 'post goal' });
}   

//@desc update a goal
//@route PUT /api/goals/:id
//@access public
const updateGoal=async(req,res)=>{
    res.status(200).json({ message: `update gaol that id is ${req.params.id}` });
}

//@desc delete a goal
//@route DELETE /api/goals/:id
//@access public
const deleteGoal=async (req,res)=>{
    res.status(200).json({ message: `delete gaoal with id ${req.params.id}` });
}   



module.exports={
    getGoals,
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
};
