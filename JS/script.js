<!-- Google Maps -->

function myMap() {
  var myCenter = new google.maps.LatLng(51.508742,-0.120850);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyApACqbA7lS9wA2fjlJta5hxQw6wE8TTGM=myMap"></script>
