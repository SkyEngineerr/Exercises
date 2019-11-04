let val;
// Date Constructor
const today = new Date();
let birthday = new Date('03-24-1987 07:33:05');
birthday = new Date('June 27 1987');
console.log(today)
console.log (birthday)
// Date GET Methods
val = today.getMonth();
/*returns the month in the specified date according to local time, as a zero-based value
(where zero indicates the first month of the year)*/
val = today.getDate();
/* The getDate() method returns the day of the month for the specified
date according to local TimeRanges.*/
val = today.getDay(); // returns the day of the week;
val = today.getFullYear(); // returns the four digits year;
val = today.getHours(); // returns the hours in local time;
val = today.getMinutes(); // returns the minitues in local time;
val = today.getSeconds(); // returns the seconds in local time;
val = today.getMilliseconds(); //returns the milliseconds;
val = today.getTime();
console.log(val)
// Date SET Methods
birthday.setMonth(8);
birthday.setDate(15);
birthday.setFullYear(1980);
birthday.setHours(11);
birthday.setMinutes(15);
birthday.setSeconds(00);
console.log(birthday)
