const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Get all users
userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.json(users);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

// Get specific user
userRouter.get("/:id", getUser, async (req, res) => {
    res.json(res.user);
});

// Create user
userRouter.post("/", async (req, res) => {
    console.log("got it to back end!");
    console.log(req.body);
    try {
        const hash = await new Promise((resolve, reject) => {bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        });
        let user = new User({
            email: req.body.email,
            username: req.body.username,
            password: hash,
            height: req.body.height,
            weight: req.body.weight
        });
        const newUser = await user.save();
        //res.status(201).json(newUser);
        console.log(newUser);
        res.send(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update user
userRouter.patch("/:id", getUser, async (req, res) => {
    if (req.body.weight !== null)
        res.user.weight = req.body.weight;
    if (req.body.height !== null)
        res.user.height = req.body.height;
    try {
        let updatedUser = await res.user.save();
        /*
        if (req.body.sets != null) {
            updatedSwim = await SwimWorkout.findByIdAndUpdate(
                req.params.id,
                { $push: {sets: req.body.sets} },
                { new: true, useFindAndModify: false }
            )
        }*/
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Delete user
userRouter.delete("/:id", getUser, async (req, res) => {
    console.log(Object.keys(res.user));
    try {
        await User.deleteOne(res.swim);
        res.json({message: "Deleted User"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Get user 
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user === null) {
            return res.status(404).json( {message: "Cannot find user" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.user = user;
    console.log(res.user);
    next();
}

module.exports = userRouter;