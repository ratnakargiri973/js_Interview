
let timer = document.getElementById("time")


function countDownTimer(){
    let minute = document.getElementById("minute").value;
    let totalTime = minute * 60;

    const countdown = setInterval(()=>{
        let minuteLeft = Math.floor(totalTime / 60);
        let secondLeft = totalTime % 60;
        
       timer.textContent = `${minuteLeft < 10 ? 0 :""}${minuteLeft} : ${secondLeft < 10 ? 0:""}${secondLeft}`
        
       if(totalTime<=0){
        clearInterval(countdown);
        timer.textContent = "Time's up !!!";
       }
        totalTime--;
    }, 1000)

}

document.getElementById("start").addEventListener("click", countDownTimer);
