/*  https://leafletjs.com/examples/quick-start/  */

    var mymap = L.map('mapid').setView([43.3, -0.366667], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https:///www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZHVjaGF4ZWxsbyIsImEiOiJjam4wM3BhOXYwbjkwM3BueTF4MTkycWt1In0.uQNyXBL7y8hVJmh00x699g'
    }).addTo(mymap);

    var bus = [];

    // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
    function loadBuses(event) {
        if (this.status === 200) {
	    bus = JSON.parse(this.responseText);
	    console.log(bus);
	    L.geoJSON(bus).addTo(mymap);
	} else {
	    console.log("Status de la reponse : %d (%s)", this.status, this.statusText);
	}
    }

    let reqBus = new XMLHttpRequest();
    reqBus.onload = loadBuses;

    reqBus.open("GET", "/bus/bus.json", true);
    reqBus.send(null);




