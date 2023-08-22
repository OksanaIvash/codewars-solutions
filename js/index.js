//1.Double Char
//https://www.codewars.com/kata/56b1f01c247c01db92000076/fork/javascript
function doubleChar(str) {
  let outputString = '';

  for (let i = 0; i < str.length; i++) {
    outputString += str[i] + str[i];
  }
  return outputString;
}
console.log(doubleChar('abcd')); //aabbccdd

//2.Convert a string to an array
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/fork/javascript
const stringToArray = (string) => string.split(' ');
const string = 'I love arrays they are my favorite';
const strArray = stringToArray(string);
console.log(strArray);

//---------------------version2----------------
// function stringToArray(string) {
//   return string.split(' ');
// }
// const string = 'Robin Singh';
// const strArray = stringToArray(string);
// console.log(strArray);

//3.DNA to RNA Conversion
//https://www.codewars.com/kata/5556282156230d0e5e000089/fork/javascript
function DNAtoRNA(dna) {
  const rna = dna.replaceAll('T', 'U'); //replaceAll появився минулого року
  return rna;
}

// function DNAtoRNA(dna) {
//   const rna = dna.replace(/T/g, 'U');//краще використовувати replaceAll
//   return rna;
// }

const dna = 'GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC';
console.log(DNAtoRNA(dna));
///T/ означає, що ми шукаємо символ "T", а флаг g (від "global") вказує,
//що ми хочемо замінити всі входження "T" у всьому рядку.

//---------------------version2----------------
// function DNAtoRNA(dna) {
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === 'T') {
//       dna = dna.replace('T', 'U');
//     }
//   }
//   return dna.replace('T', 'U');
// }
// const dna = 'GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC';
// console.log(DNAtoRNA(dna));

//4.Find Maximum and Minimum Values of a List
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
  return Math.min(...list);
};
const max = function (list) {
  return Math.max(...list);
};
const lists = [-52, 56, 30, 29, -54, 0, -110];
console.log(min(lists));
console.log(max(lists));

//---------------------version2----------------
// const min = function(list){
//     list.sort((a, b) => (a - b));
//     return list[0];
// }
// const max = function (list) {
//     list.sort((a, b) => (b - a));
//     return list[0];
// }
// const list = [4, 6, 2, 1, 9, 63, -134, 566];
// const minValue = min(list);
// const maxValue = max(list);

// console.log(maxValue);
// console.log(minValue);

//5.A wolf in sheep's clothing (знайти вівцю в масиві біля вовка)
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  queue.reverse();
  const wolfIndex = queue.indexOf('wolf');
  if (wolfIndex === 0) {
    return 'Pls go away and stop eating my sheep';
  } else {
    return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
  }
}

const queue = ['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'];
console.log(warnTheSheep(queue));

//---------------------version2----------------
// function warnTheSheep(queue) {
//   const wolfIndex = queue.indexOf('wolf');
//   if (wolfIndex === queue.length - 1) {
//     return 'Pls go away and stop eating my sheep';
//   } else {
//     const sheepIndex = queue.length - wolfIndex - 1;
//     return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
//   }
// }

// const queue = ['sheep', 'sheep', 'sheep', 'wolf', 'sheep'];
// console.log(warnTheSheep(queue));

//6.Beginner - Lost Without a Map
//www.codewars.com/kata/57f781872e3d8ca2a000007e/fork/javascript
function maps(x) {
  return x.map((num) => num * 2);
}
const x = [1, 2, 3];
console.log(maps(x));

//7.Beginner - Lost Without a Map
//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/fork/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1 && arr[i] - arr[i - 1] !== -1) {
      return arr[i];
    }
  }
  return null;
}
const arr = [-1, -2, -3, -5];
console.log(firstNonConsecutive(arr));

//8.Double integer
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => 2 * i;
console.log(doubleInteger(4));

//---------------------version2----------------
// function doubleInteger(i) {
//   return i * 2;
// }
// console.log(doubleInteger(4));

//9.Century From Year
//  https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = (year) => Math.ceil(year / 100);
console.log(century(2023));

//---------------------version2----------------
// function century(year) {
//   return Math.ceil(year / 100);
// }
//console.log(century(2023));

//10.Make negative
//  https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function makeNegative(num) {
  return num === 0 ? 0 : -Math.abs(num); //Math.abs() - це вбудована функція в JavaScript,
  // яка використовується для знаходження абсолютного(позитивного) значення числа.
  //-Math.abs() - робить числа від"ємними, які були позитивними або нульовими
}
console.log(makeNegative(-9));

//---------------------version2----------------
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }
// console.log(makeNegative(9));

//---------------------version3----------------
// function makeNegative(num) {
//   if (num === 0) return 0;
//   if (num < 0) return num;
//   if (num > 0) return num * -1;
// }
// console.log(makeNegative(9));

//11.Cockroach speed
//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = (s) => Math.floor((s * 100000) / 3600);
console.log(cockroachSpeed(3.563821298829928));

//12.Cangle of triangle
// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - (a + b);
console.log(otherAngle(10, 20));

//13.Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);
console.log(twiceAsOld(55, 30));

//14.Return n-th even number
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => n * 2 - 2;
console.log(nthEven(1298734));

//15.What's the real floor
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n < 0) return n;
  if (n === 0 || n === 1) return 0;
  if (n <= 13) {
    return n - 1;
  } else {
    return n - 2;
  }
}
console.log(getRealFloor(15));

//---------------------version2----------------
// const getRealFloor = (n) => {
//   if (n >= 13) return n - 2;
//   if (n > 0) return n - 1;
//   return n;
// };

//16.Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;
console.log(past(1, 0, 1));

//17.Is n divisible by x and y
//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
console.log(isDivisible(3, 3, 4));

//18.Find the smallest integer in the array
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const d = new SmallestIntegerFinder();
console.log(d.findSmallestInt([78, 56, 232, 12, 18]));
