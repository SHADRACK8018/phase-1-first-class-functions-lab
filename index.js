// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, selectedFunction) {
    return selectedFunction(drivers);
};



console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(fareDoubler(10));
console.log(fareTripler(10));

const selectedDrivers = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);
console.log(selectedDrivers);

const selectedDrivers2 = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
console.log(selectedDrivers2);