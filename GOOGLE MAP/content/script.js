/*//set map options

var mylating = {lat: 77.1619645, lng: 31.3236211};
var mapOptions = {
    center: mylating,
    zoom: 7;
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// create Map

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)*/
// set map options
var mylating = {lat: 77.1619645, lng: 31.3236211};
var mapOptions = {
    center: mylating,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// create Map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

//creater the direction service object to use the route method a get a result for a request

var directionsService = new google.mapsDirectionsService();
 

//create a directionsrender object which we will use to dispaly the route 

var DirectionsDisplay = new google.maps.DirectionsRenderer();
//bind the directionsRenderer to the map

DirectionsDisplay.setMap(map);

/*//function

function calcRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING , BYCYCLING AND TRANSIT
        unitSystem: google.maps.unitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionStatus.OK) {
            //get distance and time 
            const output = document.querySelector("#output");
            output.innerHTML = "<div class='alert-info'> From: " + document.getElementById("from").value + ".<br />To: " + Document.getElementById("to").value + ".<br /> Driving Distance <i class='fas fa-road'></i>:" + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fa-hourglass-start'></i> :" + result.routes[0].legs[0].duration.text + ".</div";


            //display route
            directionsDisplay.setDirections(result);

        } else {
            //delete route from map
            directionsDisplay.setDirections({routes: []});

            //centermap in spain 
            map.setCenter(myLating);

            //show error message
            output.innnerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-tringle'></i> could not retrieve driving distance. </div>";

        }
    });
}

//create autocomplete objects for all input

var option = {
    types: ['(cities)']
}

var input1 = Document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

var input2 = Document.getElementById("from");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options)*/




function calcRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, // WALKING, BICYCLING, AND TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    };

    // pass the request to the route method
    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
            // get distance and time 
            const output = document.querySelector("#output");
            output.innerHTML = "<div class='alert-info'> From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving Distance <i class='fas fa-road'></i>: " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fa-hourglass-start'></i>: " + result.routes[0].legs[0].duration.text + ".</div>";

            // display route
            directionsDisplay.setDirections(result);
        } else {
            // delete route from map
            directionsDisplay.setDirections({routes: []});

            // center map in Spain 
            map.setCenter(myLatlng);

            // show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });
}

// create autocomplete objects for all inputs

var options = {
    types: ['(cities)']
};

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
