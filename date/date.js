// shows the current date and time
var now = new Date();
now.toString()
console.log(now)

// date count from 1970
var epoch = new Date(0);
epoch.toISOString()
console.log(epoch)

// today's date
var today = new Date().toLocaleDateString('en-GB', {
    day : 'numeric',
    month : 'long',
    year : 'numeric'
});
console.log(today)

// get milliseconds using static method now of Date
console.log(Date.now());
// get milliseconds using method getTime of Date instance
console.log((new Date()).getTime());

// Get the current year
var year = (new Date()).getFullYear();
console.log(year);
// Sample output: 2016

// Get the current month
var month = (new Date()).getMonth();
console.log(month);
// Please note that 0 = January. This is because months range from 0 to 11, so it is often desirable to add +1 to the index.

// Get the current day
var day = (new Date()).getDate();
console.log(day);

// Get the current hour
var hours = (new Date()).getHours();
console.log(hours);
// Sample output: 10

// Get the current minutes
var minutes = (new Date()).getMinutes();
console.log(minutes);
// Sample output: 39

// Get the current seconds
var seconds = (new Date()).getSeconds();
console.log(seconds);
// Sample output: 48

// Get the current milliseconds
// To get the milliseconds (ranging from 0 to 999) of an instance of a Date object, use its getMilliseconds method.
var milliseconds = (new Date()).getMilliseconds();
console.log(milliseconds);
// Output: milliseconds right now

// Convert the current time and date to a human-readable string
var now = new Date();
// convert date to a string in UTC timezone format:
console.log(now.toUTCString());
// Output: Wed, 21 Jun 2017 09:13:01 GMT


// increase the date by 1 day
var checkoutDate = new Date();
checkoutDate.setDate( checkoutDate.getDate() + 1 );
console.log(checkoutDate)

// To compare the difference of two dates, we can do the comparison based on the timestamp.
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 5000);
var dateDiff = date1.valueOf() - date2.valueOf();
var dateDiffInYears = dateDiff/1000/60/60/24/365; //convert milliseconds into years
console.log(dateDiff)