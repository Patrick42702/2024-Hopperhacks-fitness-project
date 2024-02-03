const mongoose = require("mongoose");

const swimSchema= new mongoose.Schema({
    startTime: {type: Date},
    endTime: {type: Date, default: Date.now()},
    calories: {type: int},
    sets: [
        {
            distance: Number,
            laps: Number,
            speed: Number
        }
    ]
})

const SwimWorkout = mongoose.model("SwimWorkout", swimSchema);

module.exports = SwimWorkout;