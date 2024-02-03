const mongoose = require("mongoose");

const runSchema= new mongoose.Schema({
    startTime: {type: Date},
    endTime: {type: Date, default: Date.now()},
    calories: {type: int},
    sets: [
        {
            distance: Number,
            laps: Number,
            speed: Number,
            elevation: Number
        }
    ]
})

const RunWorkout = mongoose.model("RunWorkout", runSchema);

module.exports = RunWorkout;