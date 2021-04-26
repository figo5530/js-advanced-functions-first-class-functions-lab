// Code your solution in this file!
function returnFirstTwoDrivers(driver) {
    const newDriverArr = []
    for (let i = 0; i < 2; i++) {
        newDriverArr.push(driver[i])
    }
    return newDriverArr
}

function returnLastTwoDrivers(driver) {
    const newDriverArr = []
    for (let i = driver.length -2; i < driver.length; i++) {
        newDriverArr.push(driver[i])
    }
    return newDriverArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n) {
    return function (value) {
        return n * value
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driver, fnc) {
    return fnc(driver)
}