"use strict"
function getWX() {
	let StationID = document.getElementById("StationID").value;
	// const ADDS = require('adds')
	// const view = value => console.log(JSON.stringify(value, null, 2))
	document.getElementById("DTGfetched").innerHTML = "Data fetched at: " + new Date();
	document.getElementById("testOutput").innerHTML = StationID;
	
	// Promise.all([
	// ADDS('metars', {
	// 	stationString: StationID,
	// 	hoursBeforeNow: 1,
	// 	mostRecentForEachStation: true
	// }),
	// // ADDS('tafs', {
	// // 	stationString: 'KJFK',
	// // 	hoursBeforeNow: 1,
	// // 	mostRecentForEachStation: true
	// // }),
	// // ADDS('aircraftreports', {
	// // 	hoursBeforeNow: 1,
	// // 	mostRecent: true
	// // }),
	// // ADDS('airsigmets', {
	// // 	hoursBeforeNow: 6,
	// // 	mostRecent: true
	// // }),
	// // ADDS('gairmets', {
	// // 	hoursBeforeNow: 6,
	// // 	mostRecent: true
	// // }),
	// // ADDS('stations', {
	// // 	stationString: 'PANC'
	// // })
	// ])
	// .then(results => {
	// 	view(results)
	// })
}



