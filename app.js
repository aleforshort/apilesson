$(function(){});


$(function(){
	$("button").on("click",".submit",function(event){
	event.preventDefault();
	var userInput = $("query").val();
  	$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
	 
	 showResults(data.Search);
    });
  });
});


function showResults(results){
	var html = "";
	// var inhtml = $("#search-results").find("p");
	$.each(results, function(index,value){
		html += '<p>' + value.Title + '</p>';
		// inhtml.append(value.Title);
		console.log(value.Title);
	});
	  $('#search-results').html(html);
}

