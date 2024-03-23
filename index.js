function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}
function distanceFromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue);
  let feet = blocks * 264; // 1 block is equal to 264 feet
  return feet;
}
function distanceTravelledInFeet(start, destination) {
  let distanceInBlocks = Math.abs(start - destination);
  let distanceInFeet = distanceInBlocks * 264; // Assuming 1 block is equal to 264 feet
  return distanceInFeet;
}
// //function calculatesFarePrice(start, destination) {
//   let distance = Math.abs(start - destination);

//   if (distance <= 400) {
//     return 0;
//   } else if (distance > 400 && distance <= 2000) {
//     const distanceInFeet = distanceTravelledInFeet(start)
//     return (distance - 400) * 0.02;
//   } else if (distance > 2000 && distance <= 2500) {
//     return 25;
//   } else {
//     return 'cannot travel that far';
//   }//
  
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceInFeet <= 400) {
  
  return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
  
  const extraFeet = distanceInFeet - 400;
  return extraFeet * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
  
  return 25;
  } else {
  
  return 'cannot travel that far';
  }
}