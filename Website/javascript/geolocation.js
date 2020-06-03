var map;
function displayMap()
  {
		var location = new google.maps.LatLng( 47.6740, -122.1215 );
		var options = { zoom: 11 , center: location, mapTypeId: google.maps.MapTypeId.ROADMAP };
		var map = new google.maps.Map( document.getElementById( 'map_canvas' ), options );

		var seattle_location = new google.maps.LatLng( 47.665967, -122.105968);
	  var seattle_marker = new google.maps.Marker( { position: seattle_location, map: map, title: "Seattle Location"});
		var infoWindow2 = new google.maps.InfoWindow( { content: "<p>Seattle Location is our original place</p>" });
		google.maps.event.addListener( seattle_marker, 'click', function() { infoWindow2.open( map, seattle_marker );});
	}
