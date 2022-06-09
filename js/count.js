function refresh() {
    const timing = timer.timing();
    if (timing.isCountdown) {
        days.innerText = timing.days;
        hours.innerText = timing.hours;
        minutes.innerText = timing.minutes;
        seconds.innerText = timing.seconds;
    } else {
        text.innerText = '中考已经开始或已结束！';
        refreshIntervalID = clearInterval(refreshIntervalID);
    }
}
const text = document.querySelector('#countdownText'),
    days = document.querySelector('#countdownDays'),
    hours = document.querySelector('#countdownHours'),
    minutes = document.querySelector('#countdownMinutes'),
    seconds = document.querySelector('#countdownSeconds'),
    timer = new Timer('2022-06-26T15:00:00+08:00'), refreshIntervalID = setInterval(refresh, 500);