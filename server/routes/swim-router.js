const express = require('express');
const swimRouter = express.Router();
const SwimWorkout = require('../models/SwimWorkout');


// Get all swim workouts
swimRouter.get("/", async (req, res) => {
    try {
        const swims = await SwimWorkout.find();
        res.json(swims);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

// get specific workout
swimRouter.get("/:id", getSwim, async (req, res) => {
    res.json(res.swim)
});

// create swim workout
swimRouter.post("/", async (req, res) => {
    let swim = new SwimWorkout({
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        calories: req.body.calories,
        sets: req.body.sets
    });
    try {
        const newSwim = await swim.save();
        res.status(201).json(newSwim);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// update swim workout
swimRouter.patch("/:id", getSwim, async (req, res) => {
    if (req.body.calories !== null)
        res.swim.calories = req.body.calories;
    if (req.body.endTime !== null)
        res.swim.endTime = req.body.endTime;
    
    try {
        let updatedSwim = await res.swim.save();
        if (req.body.sets != null) {
            updatedSwim = await SwimWorkout.findByIdAndUpdate(
                req.params.id,
                { $push: {sets: req.body.sets} },
                { new: true, useFindAndModify: false }
            )
        }
        res.json(updatedSwim);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// delete swim workout
swimRouter.delete("/:id", getSwim, async (req, res) => {
    console.log(Object.keys(res.swim));
    try {
        await SwimWorkout.deleteOne(res.swim);
        res.json({ message: "Deleted Workout"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getSwim(req, res, next) {
    let swim;
    try {
        swim = await SwimWorkout.findById(req.params.id);
        if (swim === null) {
            return res.status(404).json( {message: "Cannot find workout" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    
    res.swim = swim;
    console.log(res.swim);
    next();
}

module.exports = swimRouter;
