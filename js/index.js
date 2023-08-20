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
  const rna = dna.replace(/T/g, 'U');
  return rna;
}

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
https: function maps(x) {
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
