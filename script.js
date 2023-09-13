function startTimer(){
const timeH = document.querySelector('h2');
let timeSecond = 60;

timeH.innerHTML = timeSecond;

const countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = timeSecond;
    if(timeSecond <= 0 || timeSecond < 1){
        clearInterval(countDown)
        alert("Time is up! Better luck next time.")
    }
    },1000);
}
function start()
{
    document.getElementById("start-button");
    startTimer();
}

// $("startClock").click( function() {
//     var sec = 60;
//     function startTimer(){
//         var timer = setInterval(function(){
//             sec--;
//             document.getElementById('time-remaining').innerHTML='Time: '+sec;
//             if (sec < 0) {
//                 clearInterval(timer);
//                 alert("Time is up!")
//             }
//         }, 1000);
//     }
//     document.getElementById('incorrect').addEventListener('click', function() {
//         sec -= 5;
//         document.getElementById('time-remaining').innerHTML='Time: '+sec;
//     });
//     startTimer();
// })();