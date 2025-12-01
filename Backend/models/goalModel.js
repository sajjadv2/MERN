const mongoose = require('mongoose');
const userModel = require('./userModel');

const goalSchema = mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },

    text :{
        type : String,
        required : [true , 'Plaeas insert a text value']
    }
},{
    timestamps : true,
});

module.exports = mongoose.model('Goal',goalSchema);