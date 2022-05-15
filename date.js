var dateStr = '28/10/2010'; // uncommon US short date
var dateArr = dateStr.split('/');
var dateObj = new Date(dateArr[2], parseInt(dateArr[1]) - 1, dateArr[0]);

console.log(dateObj);