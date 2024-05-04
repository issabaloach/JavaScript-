
var counterDate = document.getElementById("counterDate");
var seconds =  document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");
var months = document.getElementById("months");
var years = document.getElementById("years");

function submit() {
    var enterDate = counterDate.value
    setInterval(function() {
        var now = new Date();
        var nowNew = new Date(enterDate);
        
        var ml_sec_1 = now.getTime();
        var ml_sec_2 = nowNew.getTime();

        var difference = ml_sec_2 - ml_sec_1
        
        var newSeconds = Math.round(difference / 1000);
        var newMinutes = Math.round(difference / 1000 / 60);
        var newHours = Math.round(difference / 1000 / 60 / 60);
        var newDays = Math.round(difference / 1000 / 60 / 60 / 24);
        var newMonths = Math.round(difference / 1000 / 60 / 60 / 24 / 30);
        var newYears = Math.round(difference / 1000 / 60 / 60 / 24 / 30 / 12);

        seconds.innerText = newSeconds.toString().padStart(2, "0");
        minutes.innerText = newMinutes.toString().padStart(2, "0");
        hours.innerText = newHours.toString().padStart(2, "0");
        days.innerText = newDays.toString().padStart(2, "0");
        months.innerText = newMonths.toString().padStart(2, "0");
        years.innerText = newYears.toString().padStart(2, "0");

    }, 1000);
    
}
