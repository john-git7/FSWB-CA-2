const mongoose = require('mongoose')

const workoutModel = new mongoose.Schema({
    user:{type:String,required:true},
    date:{type:Date,required:true},
    duration:{type:Number,required:true},
    caloriesBurned:{type:Number},
    exercises:[{
        name:{type:String,required:true},
        reps:{type:Number},
        sets:{type:Number},
        weight:{type:Number},
}]
})

module.exports = ('workout',workoutModel)