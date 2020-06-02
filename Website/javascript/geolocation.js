var map;
function displayMap()
  {
		var location = new google.maps.LatLng( 47.6740, -122.1215 );
		var options = { zoom: 11 , center: location, mapTypeId: google.maps.MapTypeId.ROADMAP };
		var map = new google.maps.Map( document.getElementById( 'map_canvas' ), options );
		var wood_location = new google.maps.LatLng( 47.754860, -122.152899);
		var wood_marker = new google.maps.Marker( { position: wood_location, map: map, title: "Woodinville Location"});
		var infoWindow = new google.maps.InfoWindow( { content: "<p>Our Woodinville location offers a massive campus to allow dogs maximum activity when they're boarded </p>" });
		google.maps.event.addListener( wood_marker, 'click', function() { infoWindow.open( map, wood_marker );});
		var downtown_location = new google.maps.LatLng( 47.670565,-122.120477);
		var downtown_marker = new google.maps.Marker( { position: downtown_location, map: map, title: "Downtown"});
		var infoWindow1 = new google.maps.InfoWindow( { content: "<p>Our downtown location offers the best products and there are many package deals there.</p>" });
		google.maps.event.addListener( downtown_marker, 'click', function() { infoWindow1.open( map, downtown_marker );});
		var ridge_location = new google.maps.LatLng( 47.704096,-122.026258);
	  var ridge_marker = new google.maps.Marker( { position: ridge_location, map: map, title: "Redmond Ridge"});
		var infoWindow2 = new google.maps.InfoWindow( { content: "<p>Redmond Ridge has our biggest boarding location and offers local dog merchandise as locals come and bring their crafts.</p>" });
		google.maps.event.addListener( ridge_marker, 'click', function() { infoWindow2.open( map, ridge_marker );});
	}
