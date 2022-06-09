const timer = new timer("2022-06-26T00:00:00+8:00")
function refresh(){
    const timing = timer.timing();
    if(timing.countdown){
        document.querySelector("#crossHours").innerText = timing.hours
        document.querySelector("#crossMinutes").innerText = timing.minutes
        document.querySelector("#crossSeconds").innerText = timing.seconds
    }
    else{
        intervalID = clearInterval(intervalID);
        document.querySelector("#crossYear").innerHTML = "中考来啦"
    }
}
let intervalID = setInterval(refresh,200);