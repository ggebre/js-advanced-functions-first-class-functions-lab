// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2)
} 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return fair => fair * num
}

// const fareDoubler = function(fair){
//     const multiplier = createFareMultiplier(2)
//     return multiplier(fair)
// }

function fareDoubler(fair){
    let multiplier = createFareMultiplier(2)
    return multiplier(fair)
}

function fareTripler(fair){
    // let multiplier = createFareMultiplier(3)
    return createFareMultiplier(3)(fair)
}

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}

console.log(typeof fareDoubler)
console.log(fareTripler(5))