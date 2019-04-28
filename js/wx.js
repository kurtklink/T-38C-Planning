"use strict"
function getWX() {
	let StationID = document.getElementById("StationID").value;
	document.getElementById("DTGfetched").innerHTML = "Data fetched at: " + new Date();
	document.getElementById("testOutput").innerHTML = StationID;
	const ADDS = require('adds')

	ADDS('metars', {
	  stationString: 'KSEA',
	  hoursBeforeNow: 1
	})
	  .then(metars => {
	    console.log(JSON.stringify(metars, null, 2))
	  })
}



