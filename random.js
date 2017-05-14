//Click event on "New Quote" button
$("#generate").on("click", function() {;

  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

//Access api data and change quote on click
  $.getJSON(url, function(data) {
    $("#quote").html("<p>" + '"' + data.quoteText + '"' + "</p>");
    $("#author").html("<br>" + "<p>" + "-" + data.quoteAuthor + "</p>");

//Change color of background on click
 $("body, #generate").css("background-color", "#"+((1<<24)*Math.random()|0).toString(16));
		});

});

