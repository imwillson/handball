//alert("I am connected")
var express = require('express');
// fs is a file system
var fs = require('fs');
var request = require('request');
//cheerio is used for parsing html
var cheerio = require('cheerio');
var app = express();

// $(document).ready(function(){ 
jQuery(function () {
	app.get('/scrape', function(req,res){
		url = 'https://www.nycgovparks.org/parks?type=zip&search=Brooklyn&name=&facility[]=18300&page=1#form_top'

		request(url, function(error, response, html){

			// check if there an erro
			if(!error) {
				var $ = cheerio.load(html);

				var parkName, parkAddress

				var json = { parkName : "", parkAddress : ""};
		

				$('.park-search-item').each(function(index){

					

					parkNameTitle = $(this).children('h3').text()

					console.log(index+" "+parkNameTitle)
					$.extend(json, { parkName: parkNameTitle, parkAddress: ""});


				}) 

	 		}

	 		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

	 			console.log('File wrriten! Check Folder')

	 		})

	 		// send a response to the browser
	 		res.send('Check console')
		})

	})

});

app.listen('8081')

console.log('Hello World')

exports = module.exports = app; 