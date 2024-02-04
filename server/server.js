/**
 * The main server file. Connects to the database and uses routes
 */
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

console.log(process.env.DATABASE_URL);

//mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
//mongoose.connect(`${process.env.DATABASE_URL}`);
mongoose.connect('mongodb://127.0.0.1/database', {useNewURLParser : true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", err => console.error(err));
db.once("open", () => console.log('Connected to Database'));

app.use(express.json());

// import routers
const swimRouter = require("./routes/swim-router");
const runRouter = require("./routes/run-router");
const liftRouter = require("./routes/lift-router");
const userRouter = require("./routes/user-router");

// use routers
app.use("/swimWorkouts", swimRouter);
app.use("/runWorkouts", runRouter);
app.use("/liftWorkouts", liftRouter);
app.use("/user", userRouter);

app.listen(3000, () => {console.log("server listening on port 3000")});