function attachEventsListeners() {
    let daysButton = document.getElementById('daysBtn');
    daysButton.addEventListener('click', onClickDays);
    let daysInput = document.getElementById('days');

    let hoursButton = document.getElementById('hoursBtn');
    hoursButton.addEventListener('click', onClickHours);
    let hoursInput = document.getElementById('hours');

    let minutesButton = document.getElementById('minutesBtn');
    minutesButton.addEventListener('click', onClickMinutes);
    let minutesInput = document.getElementById('minutes');
    
    let secondsButton = document.getElementById('secondsBtn');
    secondsButton.addEventListener('click', onClickSeconds);
    let secondsInput = document.getElementById('seconds');

    function onClickDays(){
        let currentDays = document.getElementById('days').value;
        // let currentDays = Number(event.target.parentElement.querySelector('input[type="text"]').value);
        let currentHours = currentDays * 24;
        hoursInput.value = currentHours;
        let currentMinutes = currentHours * 60;
        minutesInput.value = currentMinutes;
        let currentSeconds = currentMinutes * 60;
        secondsInput.value = currentSeconds;

    }

    function onClickHours(){
        let currentHours = document.getElementById('hours').value;
        let currentDays = currentHours / 24;
        daysInput.value = currentDays;
        let currentMinutes = currentHours * 60;
        minutesInput.value = currentMinutes;
        let currentSeconds = currentMinutes * 60;
        secondsInput.value = currentSeconds;

    }

    function onClickMinutes(){
        let currentMinutes = document.getElementById('minutes').value;
        let currentDays = currentMinutes / 24 / 60;
        daysInput.value = currentDays;
        let currentHours = currentMinutes / 60;
        hoursInput.value = currentHours;
        let currentSeconds = currentMinutes * 60;
        secondsInput.value = currentSeconds;

    }

    function onClickSeconds(){
        let currentSeconds = document.getElementById('seconds').value;
        let currentDays = currentSeconds / 60 / 60 / 24;
        daysInput.value = currentDays;
        let currentHours = currentSeconds / 60 / 60;
        hoursInput.value = currentHours;
        let currentMinutes = currentSeconds / 60;
        minutesInput.value = currentMinutes;   
    }
}
