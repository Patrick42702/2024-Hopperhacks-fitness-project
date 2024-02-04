const express = require('express');
const runRouter = express.Router();
const RunWorkout = require('../models/RunWorkout');


// Get all swim workouts
runRouter.get("/", async (req, res) => {
    try {
        const runs = await RunWorkout.find();
        res.json(runs);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

// get specific workout
runRouter.get("/:id", getRun, async (req, res) => {
    res.json(res.run)
});

// create swim workout
runRouter.post("/", async (req, res) => {
    let run = new RunWorkout({
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        calories: req.body.calories,
        sets: req.body.sets
    });
    try {
        const newRun = await run.save();
        res.status(201).json(newRun);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// update swim workout
runRouter.patch("/:id", getRun, async (req, res) => {
    if (req.body.calories !== null)
        res.run.calories = req.body.calories;
    if (req.body.endTime !== null)
        res.run.endTime = req.body.endTime;
    
    try {
        let updatedRun = await res.run.save();
        if (req.body.sets != null) {
            updatedRun = await RunWorkout.findByIdAndUpdate(
                req.params.id,
                { $push: {sets: req.body.sets} },
                { new: true, useFindAndModify: false }
            )
        }
        res.json(updatedRun);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// delete swim workout
runRouter.delete("/:id", getRun, async (req, res) => {
    console.log(Object.keys(res.run));
    try {
        await RunWorkout.deleteOne(res.run);
        res.json({ message: "Deleted Workout"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getRun(req, res, next) {
    let run;
    try {
        run = await RunWorkout.findById(req.params.id);
        if (run === null) {
            return res.status(404).json( {message: "Cannot find workout" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    
    res.run = run;
    console.log(res.run);
    next();
}

module.exports = runRouter;