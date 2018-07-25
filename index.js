// Code your solution in this file!

function distanceFromHqInBlocks(start) {
   return start < 42 ? 42 - start : start - 42
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks * 264
}
