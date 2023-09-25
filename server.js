const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const rootDirectory = __dirname;

// Define a route to serve the JSON file
app.get('/recipeSource.json', (req, res) => {
  const filePath = path.join(rootDirectory, 'recipeSource.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});


// Define a route to serve the list.html file
app.get('/list', (req, res) => {
  const type = req.query.type;
  const filePath = path.join(rootDirectory, 'list.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.send(data);
    }
  });
});

// Serve static files (HTML, CSS, JavaScript, etc.)
app.use(express.static(rootDirectory));

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*

In the script file for the html file, make it so that onload, we get the query
then we fetch the source data
then we populate the page with said data



*/