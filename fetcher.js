const request = require('request');
const fs = require('fs');

request('http://www.example.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile('index.html', body, (err) => {
    if (err) throw err;
    console.log('saved');
  });
});