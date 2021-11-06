// Array
let numArr = [1, 50,  28,  2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];

// Output a new array that removed the duplicated numbers. Calculate sum of all array elements after removing duplicates
let newArray = [];
for (let i = 0; i < numArr.length; i++) {
  if (newArray.indexOf(numArr[i]) === -1) {
    newArray.push(numArr[i]);
  }
}

console.log(newArray);
let total = 0;
for (let i = 0; i < newArray.length; i++) {
  total += newArray[i];
}
console.log(`Sum of all array elements: ${total}`);

// Ascending sort
let upSort = numArr.sort(function(a, b){return a - b});
console.log(upSort);

// Descending sort
let downSort = numArr.sort(function(a, b){return b - a});
console.log(downSort);

// Find odd number and even number
const Eresult = [];
const Oresult = [];
numArr.forEach(function(evenOdd) {
  if (evenOdd % 2 === 0) {
    Eresult.push(evenOdd);
  }
  else {
    Oresult.push(evenOdd);
  }
});
console.log(Eresult);
console.log(Oresult);

// Find the prime numbers (số nguyên tố)
function checkPrime(n) {
  let flag = true;
  if (n < 2) {
    flag = false;
  }

  else {
    for(let i = 2; i < n-1; i++) {
      if ( n % i === 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag === true) {
    return true;
  }
  else {
    return false;
  }
}

let primeArray = [];
for (let i = 0; i < newArray.length-1; i++) {
  if (checkPrime(newArray[i])) {
    primeArray.push(newArray[i]);
  }
}
console.log(primeArray);

// Find the perfect numbers
function calculateSum(element) {
  let totals = 0;
  for (let index = 1; index < element; index++) {
    if (element % index === 0) {
      total += index;
    }
  }
  return totals;
}

function checkPerfectNumbers(element) {
  let isPerfectNumber = false;
  let sumSubNumbers = calculateSum(element);

  if (sumSubNumbers === element) {
    isPerfectNumber = true;
    return isPerfectNumber;
  }
  return isPerfectNumber;
}

function findPerfectNumbers(finalNums) {
  let perfectNumbers = [];

  finalNums.forEach(function(element) {
    const isPerfectNumber = checkPerfectNumbers(element);
    if (isPerfectNumber) {
      perfectNumbers.push(element);
    }
  })

  return perfectNumbers;
}

const result = findPerfectNumbers(numArr);
console.log(result);



