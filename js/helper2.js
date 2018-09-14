

//These are HTML strings to replace the %data% placeholder text you see in them.

var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<img src="%data%" id="name" class="biopic">';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="fas fa-phone" style="font-size:25px;color:#e27e3f;"></span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="fas fa-envelope" style="font-size:25px;color:#e27e3f;"></span><span class="white-text">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="fab fa-linkedin" style="font-size:25px;color:#e27e3f;"></span><a href="%data%" target="_blank" class="white-text footer">Linkedin</a></li>';
var HTMLfacebook = '<li class="flex-item"><span class="fab fa-facebook" style="font-size:25px;color:#e27e3f;" ></span><a href="%data%" target="_blank" class="white-text footer">Facebook</a></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="fas fa-map-pin" style="font-size:25px;color:#e27e3f;"></span><span class="white-text">%data%</span></li>';


var HTMLskillsStart = '<h3 class="skills-h3"></h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="skills flex-item "><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%</a>';
var HTMLworkTitle = '<a href="#">%data%</a>';
var HTMLworkDates = '<div><span class="date-text">%data%</span></div>';
var HTMLworkLocation = '<div><span class="location-text">%data%</span></div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLworkImage = '<img class="imageCenter" src="%data%" alt="work_webportfolio" width="60%">';


var googleMap = '<div id="map"></div>';

//Collecting Click Locations

var clickLocations = [];
function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);
});



/* Google Map for the website.Documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

// InitializeMap() is called when page is loaded.
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);


    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {

    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();
  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
