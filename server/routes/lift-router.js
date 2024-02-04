const express = require('express');
const liftRouter = express.Router();
const LiftWorkout = require('../models/LiftWorkout');


// Get all swim workouts
liftRouter.get("/", async (req, res) => {
    try {
        const lifts = await LiftWorkout.find();
        res.json(lifts);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

// get specific workout
liftRouter.get("/:id", getLift, async (req, res) => {
    res.json(res.lift)
});

// create swim workout
liftRouter.post("/", async (req, res) => {
    let lift = new LiftWorkout({
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        calories: req.body.calories,
        sets: req.body.sets
    });
    try {
        const newLift = await lift.save();
        res.status(201).json(newLift);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// update swim workout
liftRouter.patch("/:id", getLift, async (req, res) => {
    if (req.body.calories !== null)
        res.lift.calories = req.body.calories;
    if (req.body.endTime !== null)
        res.lift.endTime = req.body.endTime;
    
    try {
        let updatedLift = await res.lift.save();
        if (req.body.sets != null) {
            updatedLift = await LiftWorkout.findByIdAndUpdate(
                req.params.id,
                { $push: {sets: req.body.sets} },
                { new: true, useFindAndModify: false }
            )
        }
        res.json(updatedLift);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// delete swim workout
liftRouter.delete("/:id", getLift, async (req, res) => {
    console.log(Object.keys(res.lift));
    try {
        await LiftWorkout.deleteOne(res.lift);
        res.json({ message: "Deleted Workout"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getLift(req, res, next) {
    let lift;
    try {
        lift = await LiftWorkout.findById(req.params.id);
        if (lift === null) {
            return res.status(404).json( {message: "Cannot find workout" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    
    res.lift = lift;
    next();
}

module.exports = liftRouter;