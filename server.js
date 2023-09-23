const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Define the root directory for serving files (change to your project directory)
  const rootDirectory = __dirname; // By default, it uses the directory where server.js is located

  // Define a route to serve the JSON file
  if (req.url === '/recipeSource.json') {
    const filePath = path.join(rootDirectory, 'recipeSource.json');

    // Read and serve the JSON file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Handle errors (e.g., file not found)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        // Set the appropriate Content-Type header
        res.setHeader('Content-Type', 'application/json');

        // Send the JSON data as the response
        res.end(data);
      }
    });
  } else {
    // For other routes, serve your static files (HTML, CSS, JavaScript, etc.)
    const requestedPath = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(rootDirectory, requestedPath);

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Handle errors (e.g., file not found)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        // Determine the content type based on the file extension
        const extname = path.extname(filePath);
        const contentType = getContentType(extname);

        // Set the appropriate Content-Type header
        res.setHeader('Content-Type', contentType);

        // Send the file data as the response
        res.end(data);
      }
    });
  }
});

// Define MIME types for common file extensions
function getContentType(extname) {
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    default:
      return 'text/plain';
  }
}

// Set the port number for the server to listen on
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
