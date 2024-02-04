const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    email:{type: String, required: true},
    username:{type: String, required: true},
    password: {type: String, required: true},
    height: {type: Number},
    weight: {type: Number},
    swimWorkouts: {type: [mongoose.Schema.Types.ObjectID], ref: "SwimWorkout", default: []},
    RunWorkouts: {type: [mongoose.Schema.Types.ObjectID], ref: "RunWorkout", default: []},
    liftWorkouts: {type: [mongoose.Schema.Types.ObjectID], ref: "LiftWorkout", default: []}
})

const User = mongoose.model("User", userSchema);

module.exports = User;