const fs = require('fs');
const axios = require('axios')
let mongoose = require('mongoose');
let LiftWorkout = require('./models/LiftWorkout');
let User = require('./models/User');
require('dotenv').config();

axios.default.withCredentials = true;

// Replace 'your_file_path.json' with the actual path to your JSON file
const jsonFilePath = './workouts.json';

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err.message);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);
    // Handle the JSON data

    // connect to database
    mongoose.connect(process.env.DATABASE_URL);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    // seed database
    populate(jsonData);

  } catch (parseError) {
    console.error('Error parsing JSON:', parseError.message);
  }
});


const populate = async (jsonData) => {

    let user = new User({
        "username": "pat the gigachad",
        "password": "hello there",
        "height": 73,
        "weight": 160,

    });

    await user.save();


    Object.values(jsonData).forEach(async sets => {
        let lift = new LiftWorkout({
            "user": user,
            "sets": sets
        });
        await lift.save();
        await axios.patch(`http://localhost:3000/user/${user._id}`, {
           "liftWorkouts": lift
       });
    });
    console.log("done");
}

console.log('processing ...');