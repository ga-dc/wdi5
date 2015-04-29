var timer = $("#timer");
var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");

var seconds = 0;
var timerId;

function updateTime(){
  seconds++;
  timer.text('Time elapsed: ' + seconds);
}

start.on('click', function() {
    console.log('start');
    timer.text('Time elapsed: ' + seconds);
    timerId = setInterval(updateTime, 1000);
});

pause.on('click', function() {
    clearInterval(timerId);
});

reset.on('click', function() {
    console.log('reset');
    seconds = 0;
    clearInterval(timerId);
    timer.text('Stop Watch');
});
