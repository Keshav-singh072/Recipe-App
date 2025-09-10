const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint to get all recipes
app.get('/api/recipes', (req, res) => {
  // Read the local JSON file
  fs.readFile(path.join(__dirname, 'recipes.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error reading recipe data' });
    }
    // Send the parsed JSON data to the client
    res.json(JSON.parse(data));
  });
});

// Serve the frontend HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'recipe_world.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
