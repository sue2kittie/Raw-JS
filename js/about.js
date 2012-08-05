
//about.html Date
var d = new Date();

var day=d.getDate();

var year=d.getFullYear();

var month=d.getMonth();

//Array of months:
var month_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");

//concatenation
date=(month_names[month])+" "+day+","+" "+year;
document.getElementById("date").innerHTML=date;