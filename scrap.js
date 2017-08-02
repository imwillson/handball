$('.inBox').each(function(i, elem) {

    $('.inBodyText').filter(function(){
        var data = $(this);
        agent = data.children().first().text();
        //agency = data.children().last().children().text();

        json.agent = agent;

    })

})



$('.park-search-item').filter(function(){

				var data = $(this)

				// title = data.children().nth-child(2).text()

				title = data.children(':nth-child(2)').text() 	

				console.log(title)

			
				json.parkName = title;