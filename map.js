$(document).ready(function() {
	var height = $( document ).height()+"px";
	console.log(height);
	$("#mapWrap").css("height", height)

	  var center = new google.maps.LatLng(47.5702027,-122.388055);
  var mapOptions = {
    zoom: 14,
    center: center,
    draggable: true
  };
  var markersArray = [];
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var selected = [];
  var paths = document.querySelectorAll('.selectPlace');

});
