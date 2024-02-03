const mongoose = require("mongoose");

const swimSchema= new mongoose.Schema({
    startTime: {type: Date, default: Date.now},
    endTime: {type: Date, default: Date.now()},
    calories: {type: Number, default: 0},
    sets: {type: [
        {
            distance: Number,
            laps: Number,
            speed: Number
        }
    ], default: []}
})

const SwimWorkout = mongoose.model("SwimWorkout", swimSchema);

module.exports = SwimWorkout;