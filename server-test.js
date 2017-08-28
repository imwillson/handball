var request = require('request');

url = 'https://www.nycgovparks.org/parks?type=zip&search=Brooklyn&name=&facility[]=18300&page=1#form_top'

request(url, function(error, response, body){
	console.log('error:', error); // Print the error if one occurred
  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  	console.log('body:', body); // Print the HTML for the Google homepage.
});