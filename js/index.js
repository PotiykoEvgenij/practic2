// const dateBtn = document.querySelector('.js-date');

// dateBtn.addEventListener("click", () => {
//     const date = new Date();
//     const teamMeetingDate = new Date("March 16, 2030");
//     const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
//     // console.log(date);
//     // console.log(date.toString());
//     // console.log(date.getTime());
//     // console.log(teamMeetingDate);
//     // console.log(preciseTeamMeetingDate);
//     console.log("Date: ", date);

//     // Повертає день місяця від 1 до 31
//     console.log("getDate(): ", date.getDate());

//     // Повертає день тижня від 0 до 6
//     console.log("getDay(): ", date.getDay());

//     // Повертає місяць від 0 до 11
//     console.log("getMonth(): ", date.getMonth());

//     // Повертає рік з 4 цифр
//     console.log("getFullYear(): ", date.getFullYear());

//     // Повертає години
//     console.log("getHours(): ", date.getHours());

//     // Повертає хвилини
//     console.log("getMinutes(): ", date.getMinutes());

//     // Повертає секунди
//     console.log("getSeconds(): ", date.getSeconds());

//     // Повертає мілісекунди
//     console.log("getMilliseconds(): ", date.getMilliseconds());
//     console.log("getUTCDate(): ", date.getUTCDate());

//     // Повертає день тижня від 0 до 6
//     console.log("getUTCDay(): ", date.getUTCDay());

//     // Повертає місяць від 0 до 11
//     console.log("getUTCMonth(): ", date.getUTCMonth());

//     // Повертає рік з 4 цифр
//     console.log("getUTCFullYear(): ", date.getUTCFullYear());

//     // Повертає години
//     console.log("getUTCHours(): ", date.getUTCHours());

//     // Повертає хвилини
//     console.log("getUTCMinutes(): ", date.getUTCMinutes());

//     // Повертає секунди
//     console.log("getUTCSeconds(): ", date.getUTCSeconds());

//     // Повертає мілісекунди
//     console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
// });

// Home work 9

// const startBtn = document.querySelector("[data-start]");
// const stopBtn = document.querySelector("[data-stop]");
// const body = document.body;
// let intervalId = null;

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
// }

// function startChangeBgColor() {
//     intervalId = setInterval(() => {
//         body.style.backgroundColor = getRandomHexColor();
//     }, 1000);
//     startBtn.disabled = true;
// }

// function stopChangeBgColor() {
//     clearInterval(intervalId);
//     startBtn.disabled = false;
// }

// startBtn.addEventListener("click", startChangeBgColor);
// stopBtn.addEventListener("click", stopChangeBgColor);

// Timer

const datetimePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let countdownIntervalId;

function updateTimer() {
    const now = new Date().getTime();
    const countDownDate = new Date(datetimePicker.value).getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(countdownIntervalId);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
}

startBtn.addEventListener('click', () => {
    clearInterval(countdownIntervalId);
    countdownIntervalId = setInterval(updateTimer, 1000);
});
