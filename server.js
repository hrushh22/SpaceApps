const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.json()); // Enable JSON request body parsing

app.post('/saveUserData', (req, res) => {
  const userData = req.body;

  // Define the path to the JSON file where you want to store the data
  const filePath = 'userdata.json';

  // Read the existing data from the JSON file (if any)
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }

  // Add the new user data to the existing data
  existingData.push(userData);

  // Write the updated data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8');

  res.sendStatus(200); // Send a success response to the client
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
