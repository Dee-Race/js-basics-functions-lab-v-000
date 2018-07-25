// Code your solution in this file!

function distanceFromHqInBlocks(start) {
   return start < 42 ? 42 - start : start - 42
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264
}

function distanceTravelledInFeet(start, finish) {
  return start < finish ? (finish - start) * 264 : (start - finish) * 264
}

function calculatesFarePrice(start, destination) {
  
}
