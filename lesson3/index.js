const monthsArr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
const daysArr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
const msInHour = 3600000;
const hoursInDay = 24;

//----------Display the current month--------
function showMonth() {
  const currentMonth = new Date().getUTCMonth();
  return console.log(monthsArr[currentMonth]);
}

//----------Display the current day of the week--------
function showDay() {
  const currentDay = new Date().getUTCDay();
  return console.log(daysArr[currentDay]);
}

//----------Display the number of hours between March 1, 1988 and the current time--------
function dateHoursDiffer() {
  const currentDay = new Date();
  const benchDay = Date.parse('1988-03-01');
  return console.log(Math.ceil((currentDay - benchDay) / 3600000));
}

//----------Display the number of seconds remaining until the end of the day--------
function showSecondsTillTomorrow() {
  const currentTime = new Date();
  const tomorrow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)
  return console.log((tomorrow - currentTime) / 1000);
}

//----------input in which the user enters his date of birth--------
const input = document.getElementById('dataInput');
const output = document.getElementById('output');

input.addEventListener('blur', (event) => {
  getDaysToBirthday(event.target.value);
})

function getDaysToBirthday(date) {
  const currentDate = new Date();
  const thisYearBirthday = new Date(new Date().getFullYear(), new Date(date).getMonth(),
    new Date(date).getDate());
  
  const daysLeft = 
    ((thisYearBirthday - currentDate) > 0) ?
    Math.trunc((thisYearBirthday - currentDate) / msInHour / hoursInDay):
    Math.trunc(((new Date(new Date().getFullYear() + 1, new Date(date).getMonth(),
      new Date(date).getDate())) - currentDate) / msInHour / hoursInDay);
  
  return output.textContent = 'Days till birthday: ' + daysLeft;
}

showMonth();
showDay();
dateHoursDiffer();
showSecondsTillTomorrow();