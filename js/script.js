window.onload = function() {
  var deadLine = new Date('July 25, 2020 12:00:00').getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadLine - now;

    var days = Math.floor(t/(1000*60*60*24));
    var hrs = Math.floor((t%(1000*60*60*24))/(1000*60*60));
    var mins = Math.floor((t%(1000*60*60))/(1000*60));
    var secs = Math.floor((t%(1000*60))/1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('secs').innerHTML = secs;


  },1000);
};
