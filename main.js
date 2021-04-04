var Event = require('./event/event')
var startDate = new Date(2021,3,7,8,0); // April 7, 08:00
var endDate = new Date(2021,3,7,10,0); // April 7, 10:00
new Event(false, false, startDate, endDate);

var startDate = new Date(2021,3,7,10,0); // April 7, 10:00
var endDate = new Date(2021,3,7,18,0); // April 7, 18:00
new Event(true, false, startDate, endDate);

var startDate = new Date(2021,2,31,12,0); // March 31, 12:00
var endDate = new Date(2021,2,31,14,0); // March 31, 14:00
new Event(false, true, startDate, endDate);

var fromDate = new Date(2021,3,7,8,0); // April 7, 08:00
var toDate = new Date(2021,3,7,18,0); // April 7, 18:00


Event.prototype.availabilities(fromDate, toDate);
