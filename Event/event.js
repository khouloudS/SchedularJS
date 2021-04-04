var eventList = [];
var FreeEvents = [];
var BusyEvents = [];
const NEXT_WEEK=7*24*60*60*1000; //same time next week in mill sec
const NEXT_SLOT=30*60*1000; //next 30 min in mill sec

var Event = function (opening, recurring, startDate, endDate) {
    this.opening = opening;
    this.recurring = recurring;
    this.startDate = startDate;
    this.endDate = endDate;
    eventList.push(this);
};

Event.prototype.availabilities = function (fromDate, toDate) {
    eventList.forEach(function (element) {
        if (element.opening === true) {
            //  get free slot (start & end) in mill sec
            start_open = Date.parse(element.startDate);
            end_open = Date.parse(element.endDate);
            AddFreeEvents(element, Date.parse(fromDate), Date.parse(toDate), start_open, end_open);
        };
    });
    eventList.forEach(function (element) {
        if (element.opening === false) {
            //  get busy windows (start & end) in mill sec
            start_busy = Date.parse(element.startDate);
            end_busy = Date.parse(element.endDate);
            AddBusyEvents(element, Date.parse(fromDate), Date.parse(toDate), start_busy, end_busy);
        };
    });
};

function AddFreeEvents(element, fromDate, toDate, start_open, end_open) {
    start_date=Math.max(fromDate,start_open);
    end_date=Math.min(toDate,end_open);
    next_slot = start_date;
    while (next_slot < end_date){
        FreeEvents.push(timeToString(next_slot));
        next_slot += NEXT_SLOT; // check next 30 min slot
    };
    //  recursive call for recurring available events
    if (element.recurring === true && start_open < toDate) {
        AddFreeEvents(element, fromDate, toDate, start_open + NEXT_WEEK, end_open + NEXT_WEEK);
    }
}
function AddBusyEvents(element, fromDate, toDate, start_busy, end_busy) {
    start_date=Math.max(fromDate,start_busy);
    end_date=Math.min(toDate,end_busy);
    next_slot = start_date;
    while (next_slot < end_date) {
        BusyEvents.push(timeToString(next_slot));
        next_slot += NEXT_SLOT; // check next 30 min slot
    };

    //  recursive call for recurring busy events
    if (element.recurring === true && start_busy < toDate) {
        AddBusyEvents(element, fromDate, toDate, start_busy + NEXT_WEEK, end_busy + NEXT_WEEK);
    }
}

function timeToString(time_mill) {
    var date_time = new Date(time_mill);
    return  date_time.toString().split(' ')[1]+ ' '+ date_time.getDate()+  ' at ' + date_time.getHours() + ':' + date_time.getMinutes();
}



module.exports = Event;
