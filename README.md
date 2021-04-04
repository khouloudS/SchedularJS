# SchedularJS

We are building a method that will allow companies to handle their interventions in their calendar. We already have classes for the intervention and we need to build a method that will allow us to calculate all the available windows.
An event is either an opening a or busy window. A busy window means that the company already has an intervention scheduled or cannot take an intervention this specific window.
An opening event can be recurring, that means that it repeats itself every week.

### Installation and usage
Clone or donwload 
```
git clone https://github.com/khouloudS/SchedularJS.git
```

Install the dependencies needed by the converter.
```
cd SchedularJS
node main.js
```

### Solution breakdown
The main idea of the solution is to locate all the open windows between the specified time boundaries and then remove the busy events during that periode of time to end up with the actual remaining free windows for possible intervention.

##### 1. Adding free windows

In order to be taken into consideration, a free window should satisfy two criterias:
* Opening field of the event should be True.
* Should be within the specified time.

The first criteria is checked while looping over the Events array and checking the opening field of each element.
The second criteria is checked by **AddFreeEvents()** function call.

**AddFreeEvents()** focuses on the inner time interval to grab the **Free window within the boundaries** by doing the followings:
* Set the start to the latest between the desired global time and the opening event start time (the latest) using **Math.max** to get the highest time in milliseconds.
* Set the end to the earliest between the desired global time and the opening event end time (the earliest) using **Math.min** to get the lowest time in milliseconds.
* Focusing only on opening events within the desired time (event start time should be lower than the end of desired window)
* Recurring opening events are checked by a recursive call.

##### 2. Adding busy windows
In order to be taken into consideration, a busy window should satisfy two criterias:
* Opening field of the event should be False.
* Should be within the specified time.

The first criteria is checked while looping over the Events array and checking the opening field of each element.
The second criteria is checked by **AddBusyEvents()** function call.

**AddBusyEvents()** focuses on the inner time interval to grab the **Busy windows within the boundaries** by doing the followings:
* Set the start to the latest between the desired global time and the busy event start time (the latest) using **Math.max** to get the highest time in milliseconds.
* Set the end to the earliest between the desired global time and the busy event end time (the earliest) using **Math.min** to get the lowest time in milliseconds.
* Focusing only on busy events within the desired time (event start time should be lower than the end of desired window)
* Recurring busy events are checked by a recursive call.

##### 3. Filtering out busy windows:

The final free windows should satisfy the following criteria:
* A free window should not be in busy intervals.

Available slots: **avaliablities[] = FreeWindows[] - BusyWindows[]**



##### 4. Printing available windows:

The computed free time slots are printed to the console using the required format.

### Author
Khouloud Sellami (khouloud.sellami@esprit.tn)
