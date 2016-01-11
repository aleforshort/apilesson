$(function(){});

$("button").click(function(){
	var userSearch = $("input").val();

	if(userSearch!=""){
		userQuery;

	}
});

var userQuery = $(function(){

  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    console.log(data);
  });
});