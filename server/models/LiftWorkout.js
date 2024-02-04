const mongoose = require("mongoose");

const liftSchema= new mongoose.Schema({
    user: {type: [mongoose.Schema.Types.ObjectID], ref: "User"},
    startTime: {type: Date, default: Date.now()},
    endTime: {type: Date, default: Date.now()},
    calories: {type: Number, default: 0},
    sets: {type: [
        {
            activity: String, // subject to change to a type/model of its own
            reps: Number,
            weight: Number

        }
    ], default: []}
})

const LiftWorkout = mongoose.model("LiftWorkout", liftSchema);

module.exports = LiftWorkout;