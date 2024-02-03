const fs = require('fs');
let mongoose = require('mongoose');
let LiftWorkout = require('./models/LiftWorkout')
require('dotenv').config();

// Replace 'your_file_path.json' with the actual path to your JSON file
const jsonFilePath = './workouts.json';

let liftWorkouts = [];

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


const populate = (jsonData) => {
    let n = 0
    Object.values(jsonData).forEach(async sets => {
        console.log(++n);
        let lift = new LiftWorkout({
            "sets": sets
        });
        await lift.save();
    });
    console.log("done");
}

console.log('processing ...');