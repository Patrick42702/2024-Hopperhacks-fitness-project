const mongoose = require("mongoose");

const liftSchema= new mongoose.Schema({
    startTime: {type: Date},
    endTime: {type: Date, default: Date.now()},
    calories: {type: int},
    sets: [
        {
            type: String, // subject to change to a type/model of its own
            reps: Number,
            weight: Number

        }
    ]
})

const LiftWorkout = mongoose.model("LiftWorkout", liftSchema);

module.exports = LiftWorkout;