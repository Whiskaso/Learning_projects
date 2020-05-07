const endTime = new Date('2020-07-04 22:32:33').getTime();
const spanD = document.querySelector('.d');
const spanH = document.querySelector('.h');
const spanM = document.querySelector('.m');
const spanS = document.querySelector('.s');

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;

    const seconds = time / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = Math.floor(hours / 24);


    let hoursWithoutDays = Math.floor(hours % 24);

    hoursWithoutDays = hoursWithoutDays < 10 ? '0' + hoursWithoutDays : hoursWithoutDays;

    let minutesWithoutHours = Math.floor(minutes % 60);

    minutesWithoutHours = minutesWithoutHours < 10 ? '0' + minutesWithoutHours : minutesWithoutHours;

    let secondsWithoutMinutes = Math.floor(seconds % 60);

    secondsWithoutMinutes = secondsWithoutMinutes < 10 ? '0' + secondsWithoutMinutes : secondsWithoutMinutes;

    spanD.textContent = days;
    spanH.textContent = hoursWithoutDays;
    spanM.textContent = minutesWithoutHours;
    spanS.textContent = secondsWithoutMinutes;

}, 1000);