let fare

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  let lastTwoDrivers = [...drivers]
  let lastTwo = lastTwoDrivers.length - 2
  lastTwoDrivers = lastTwoDrivers.slice(lastTwo, lastTwoDrivers.length)
  return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  // return function (fare) {fare * number} 
  const fareMultiplier = (fare) => fare * multiplier
  return fareMultiplier
}

const fareDoubler = function (fare) {
  let multiplier = 2
  createFareMultiplier(2)
  return fare * multiplier
}

const fareTripler = function (fare) {
  let multiplier = 3
  createFareMultiplier(3)
  return fare * multiplier
}

function selectDifferentDrivers(drivers, selection) {
  if (selection === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
  } else if (selection === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
  } else
  return drivers
}
