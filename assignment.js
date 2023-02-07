// Problem 1

function mindGame(positiveNumber) {
  //In this mindGame function.. multiply the positiveNumber parameter by 3, then add 10, then divide by 2, then subtract 5 and finally return the result.
  if (positiveNumber < 0 || typeof positiveNumber !== "number") {
    return "Please input a positive number only!";
  }
  const result = (positiveNumber * 3 + 10) / 2 - 5;
  return result;
}
// console.log(mindGame(33));

// Problem 2

function evenOdd(string) {
  //In this evenOdd function input parameter is string. If length of the input parameter(string) is divided by 2 and have no remainder it is 'even' otherwise it is 'odd'.
  if (typeof string !== "string") {
    return "Please input string/text only!!!";
  }
  const stringLength = string.length;
  if (stringLength % 2 === 0) {
    return "even";
  } else return "odd";
}
// console.log(evenOdd("pHero"));

// Problem 3

function isLGSeven(number) {
  //In this isLGSeven function input parameter is number first check that if the input is number. then subtract the number by 7. then  if subtract result is less than 7 then function return the result else multiply the input number by 2 then return the result.
  if (typeof number !== "number") {
    return "Please input number only !!!";
  }
  const subtractionResult = number - 7;
  if (subtractionResult < 7) {
    return subtractionResult;
  } else return number * 2;
}
// console.log(isLGSeven(15));

// Problem 4

function findingBadData(array) {
  //In this findingBadData function input parameter is array or not first checked that if the input is array then using for loop find single element of the array. if element is less then 0 then condition will be true and count will increment and after finish the loop return th count result.

  if (Array.isArray(array) === false) {
    return "Please input array";
  }
  let badData = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element < 0) {
      badData++;
    }
  }
  return badData;
}
let array =   [ -4, -9, -5, -33, -55 ];
console.log(findingBadData(array));

// Problem 5

function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems) {
  //this function will take 3 input, gems number of 3 friends. then calculate total diamond multiply the number according to their number. if total gem is less than 2000 then function will return the total diamond number or if number is greater then 2000 then subtract the result by 2000 and return the result.
  if (
    typeof friend1Gems !== "number" ||
    typeof friend2Gems !== "number" ||
    typeof friend3Gems !== "number"
  ) {
    return "Please input 3 number correctly & it should be number type only !!!";
  }
  let friend1GemsPower = 21;
  let friend2GemsPower = 32;
  let friend3GemsPower = 43;
  const totalDiamond =
    friend1Gems * friend1GemsPower +
    friend2Gems * friend2GemsPower +
    friend3Gems * friend3GemsPower;
  if (totalDiamond > 2000) {
    return totalDiamond - 2000;
  } else return totalDiamond;
}
// console.log(gemsToDiamond(1, 1, 1));
