
var date = new Date();
date.setDate(date.getDate()-2);
document.getElementById("time").textContent = date;


// This is the right way to get it to display, but it is not working for me currently.
// var date = new Date().getMonth() +1;
// date.setDate(date.getDate()-2);
// document.getElementById("time").textContent = date;