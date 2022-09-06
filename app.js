function time() {
  let currentHour = document.getElementById("hour");
  let currentmin = document.getElementById("minute");
  let currentsec = document.getElementById("second");

  let currentTime = new Date();

  (currentTime.getHours()) < 10 ? currentHour.innerHTML = "0"+currentTime.getHours() : currentHour.innerHTML = currentTime.getHours();
  (currentTime.getMinutes()) < 10 ? currentmin.innerHTML = "0"+currentTime.getMinutes() : currentmin.innerHTML = currentTime.getMinutes();
  (currentTime.getSeconds()) < 10 ? currentsec.innerHTML = "0"+currentTime.getSeconds() : currentsec.innerHTML = currentTime.getSeconds();

}

setInterval(function () {
  time();
}, 1000);

function day(){
    let currentDate = new Date().getDate();
    let currentMonth = new Date().getUTCMonth() + 1;
    let currentYear = new Date().getUTCFullYear();

    document.getElementById('currentdate').innerHTML=`${currentDate}/${currentMonth}/${currentYear} `
}
setInterval(function () {
  day();
}, 1000);


function daysWeek(){
    let dayOfWeek = [
      "pazartesi",
      "salı",
      "çarşamba",
      "perşembe",
      "cuma",
      "cumartesi",
      "pazar",
    ];
    let currentDays = new Date().getDay();
    document.getElementById("daytime").innerHTML = `${
      dayOfWeek[currentDays - 1]
    }`;
}
setInterval(function () {
  daysWeek();
}, 1000);
