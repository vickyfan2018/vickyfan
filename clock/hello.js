function getcurrenttime(){

function addZero(number){
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

var current = new Date();
var year = current.getFullYear();
var month = current.getMonth();
var date = current.getDate();
var day =current.getDay();
var hour = addZero(current.getHours());
var minutes = addZero(current.getMinutes());
var second = addZero(current.getSeconds());



function getMonth(month){
    var todayMonth = ["January", "February", 
    "March", "April", "May", "June", "July"];

    return todayMonth[month]
}


function getDay(day){
    var todayDay = ["Sunday", "Monday", 
    "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (day>6) {
        day = day - 7
    }

    return todayDay[day]
}
if (hour < 12) {
 
 var meridiem = "AM";
  }

if (hour > 12) {
    hour = hour - 12;
 var meridiem = "PM";
  }



document.getElementById("year").innerHTML = year; 
document.getElementById("month").innerHTML =  getMonth(month); 
document.getElementById("date").innerHTML = date ;
document.getElementById("day").innerHTML = getDay(day) ;


document.getElementById("time").innerHTML = hour ;
document.getElementById("minutes").innerHTML = minutes ;
document.getElementById("second").innerHTML = second + "" + meridiem ;


}


setInterval(getcurrenttime, 1000);