var Event = require('./event/event')

var startDate = new Date(2016,6,1,10,30); // July 1st, 10:30
var endDate = new Date(2016,6,1,14,0); // July 1st, 14:00

new Event(true, true, startDate, endDate); // weekly recurring opening in calendar

startDate = new Date(2016,6,8,11,30); // July 8th 11:30
endDate = new Date(2016,6,8,12,30); // July 8th 12:30
new Event(false, false, startDate, endDate); // intervention scheduled

var fromDate = new Date(2016,7,4,10,0);
var toDate = new Date(2016,7,10,10,0);

Event.prototype.availabilities(fromDate, toDate);

/*
 * Answer should be :
 * I'm available from July 8th, at 10:30, 11:00, 12:30, 13:00, and 13:30
 * I'm not available any other time !
 */
