const http = require('http');
const fs = require('fs');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync('demo.html');

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;            // Set the response status code to 200 (OK)
  res.setHeader('Content-Type', 'text/html');  // Set the response header content type to text/plain
  res.end(home);      // Send the response body with 'Hello, World!' text
  
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});