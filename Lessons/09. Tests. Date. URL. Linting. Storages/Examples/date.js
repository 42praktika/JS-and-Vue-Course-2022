// Date

const currentDate = new Date();
console.log(currentDate);






// передаем количество миллисекунд, прошедших с 1 января 1970 года
const currentDate = new Date(2524332352452);
console.log(currentDate);







// const date = new Date(year, month, date, hours, minutes, seconds, ms)
const date = new Date(2011, 0, 1, 0, 0, 0, 0);



/*
Получение данных:

- getFullYear()
- getMonth()
- getDate()
- getHours()
- getMinutes(),
- getSeconds(),
- getMilliseconds()

Установка данных:

- setFullYear(year, [month], [date])
- setMonth(month, [date])
- setDate(date)
- setHours(hour, [min], [sec], [ms])
- setMinutes(min, [sec], [ms])
- setSeconds(sec, [ms])
- setMilliseconds(ms)
- setTime(milliseconds)

 */

// https://date-fns.org/
// https://day.js.org/
// https://momentjs.com/