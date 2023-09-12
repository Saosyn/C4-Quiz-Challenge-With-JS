const timeH = document.querySelector('h2');
let timeSecond = 60;

timeH.innerHTML = timeSecond;

const countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = timeSecond;
    if(timeSecond <= 0 || timeSecond < 1){
        clearInterval(countDown)
    }
},1000)