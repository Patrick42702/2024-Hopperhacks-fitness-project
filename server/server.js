/**
 * The main server file. Connects to the database and uses routes
 */

const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => {console.log("server listening on port 3000")});