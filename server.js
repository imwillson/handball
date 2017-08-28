
//alert("I am connected")
var express = require('express');
// fs is a file system
var fs = require('fs');
var request = require('request'); //http client (makin g http calls)
//cheerio is the lightweight jQuery
var cheerio = require('cheerio');
var app = express(); // web framework for node

// $(document).ready(function(){ 
// jQuery(function () {
app.get('/scrape', function(req,res){
	url = 'https://www.nycgovparks.org/parks?type=zip&search=Brooklyn&name=&facility[]=18300&page=1#form_top'

	request(url, function(error, response, html){
		console.log('statusCode:', response && response.statusCode); // 

		// check if there an error
		if(!error && response.statusCode ==200) {
			

			var $ = cheerio.load(html);
			var parkName, resultNum
			var jsonResults = [];
		
			console.log('before the each function');
			$('.park-search-item').each(function(index){

				parkNameTitle = $(this).children('h3').text()

				console.log("test print in each function");
				console.log(parkNameTitle);
				//console.log(index+" "+parkNameTitle)
				var parsedData = {
					resultNum: index,
					parkName: parkNameTitle
				}

				console.log(parsedData.resultNum+" "+parsedDate.parkName);


			}) 

 		};

 		fs.writeFile('output.json', JSON.stringify(jsonResults, null, 4), function(err){

 			console.log('File wrriten! Check Folder')

 		});

 		// send a response to the browser
 		res.send('Check console')
	});

});


app.listen('8081')

console.log('Hello World')

exports = module.exports = app; 