var eventList = [];

var Event = function(opening, recurring, startDate, endDate){
    this.opening = opening;
    this.recurring = recurring;
    this.startDate = startDate;
    this.endDate = endDate;

    eventList.push(this);
};

Event.prototype.availabilities = function(fromDate, toDate){
    return //Something awesome;
};

module.exports = Event;

