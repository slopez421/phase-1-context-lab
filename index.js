/* Your Code Here */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    });

    let payable = eligibleDates.reduce(
        function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this),
     0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};

function createEmployeeRecord(array) {

    return {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour: array[3],
        timeInEvents : [],
        timeOutEvents : [],
} 
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}

function dsObject(type, dateStamp) {
    return {
        type: type,
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    }
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push(dsObject("TimeIn", dateStamp))
    return this
}

createTimeInEvent.call(createEmployeeRecord)

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push(dsObject("TimeOut", dateStamp))
    return this
}

createTimeOutEvent.call(createEmployeeRecord)

function hoursWorkedOnDate(dateOfHours) {
    "use strict"
    let timeIn = this.timeInEvents.find(element => element.date === dateOfHours)
    let timeOut = this.timeOutEvents.find((element => element.date === dateOfHours))
    
        let hours = ((timeOut.hour - timeIn.hour)/100);
        return hours
    }


hoursWorkedOnDate.call(createEmployeeRecord, dateofHours)



function wagesEarnedOnDate(date) {
    
    let wage = this.payPerHour
    let hoursWorked = hoursWorkedOnDate.bind(this, date)
    return wage * hoursWorked(this)
    //return hoursWorked(date) * this.payPerHour
}

wagesEarnedOnDate.call(createEmployeeRecord)



//wagesEarnedOnDate.call(createEmployeeRecord, date)
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */






// function allWagesFor() {
    
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date;
//     });

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// };

// allWagesFor.call(createEmployeeRecord)

function findEmployeeByFirstName(array, firstName) {
    return array.find(element => element.firstName === firstName)
    
}

function calculatePayroll (array) {
    let payRoll = array.map(emplyee => allWagesFor.call(emplyee))
    return payRoll.reduce((accumulator, currentValue) => accumulator + currentValue)
   }

   