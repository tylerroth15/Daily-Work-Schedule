//instantiate a moment object
var NowMoment = moment().format("dddd, MMMM Do");

//display value of moment object in #displayMoment div
var eDisplayMoment= 
document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;
