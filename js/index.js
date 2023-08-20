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





