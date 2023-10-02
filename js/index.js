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
console.log(cockroachSpeed(3.563821298829928)); //98

//12.Cangle of triangle
// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - (a + b);
console.log(otherAngle(10, 20)); //150

//13.Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);
console.log(twiceAsOld(55, 30)); //5

//14.Return n-th even number
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => n * 2 - 2;
console.log(nthEven(1298734)); //2597466

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
console.log(getRealFloor(15)); //13

//---------------------version2----------------
// const getRealFloor = (n) => {
//   if (n >= 13) return n - 2;
//   if (n > 0) return n - 1;
//   return n;
// };

//16.Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;
console.log(past(1, 0, 1)); //3601000

//17.Is n divisible by x and y
//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
console.log(isDivisible(3, 3, 4)); //false

//18.Find the smallest integer in the array
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const d = new SmallestIntegerFinder();
console.log(d.findSmallestInt([78, 56, 232, 12, 18])); //12

// function giveMeFive(obj) {
//   const arr = [];
//   for (let key in obj) {
//     if (key.length === 5) {
//       arr.push(key);
//     }

//     const value = obj[key];
//     if (value.length === 5) {
//       arr.push(value);
//     }
//   }
//   return arr;
// }

//19. What's in a name?
//https://www.codewars.com/kata/59daf400beec9780a9000045/train/javascript
function nameInStr(str, name) {
  const lowerStr = str.toLowerCase();
  const lowerName = name.toLowerCase();
  let j = 0;
  for (let i = 0; i <= lowerStr.length; i++) {
    if (j === lowerName.length) return true;
    if (lowerStr[i] === lowerName[j]) j++;
  }
  return false;
}
console.log(nameInStr('Across the rivers', 'Chris')); //true

//20. Take an Arrow to the knee, Functionally
//https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript

const ArrowFunc = (arr) => String.fromCharCode(...arr);
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])); //FUS ROH DAH

//21. Row Weights
//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/javascript
function rowWeights(array) {
  let weightTeam1 = 0;
  let weightTeam2 = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      weightTeam1 += array[i];
    } else {
      weightTeam2 += array[i];
    }
  }
  return [weightTeam1, weightTeam2];
}
console.log(rowWeights([80])); //[80, 0]

//22.Isograms
//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (newStr.includes(char)) return false;
    newStr += char;
  }
  return true;
}
console.log(isIsogram('Dermatoglyphics')); //true

//---------------------version2----------------
// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size === str.length;   //https://www.w3schools.com/js/js_object_sets.asp
// }

//23. Convert an array of strings to array of numbers
//https://www.codewars.com/kata/5783d8f3202c0e486c001d23/javascript

const toNumberArray = (stringarray) => stringarray.map((num) => Number(num));
console.log(toNumberArray(['1.1', '2.2', '3.3'])); // [1.1, 2.2, 3.3]

//24. Get the Middle Character
//https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

function getMiddle(s) {
  return s.length % 2 === 0
    ? s.substr(s.length / 2 - 1, 2)
    : s.substr((s.length - 1) / 2, 1);
}

console.log(getMiddle('test')); //es

//25. Character Concatenation
//https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript

function charConcat(string) {
  let counter = 1;
  let newString = '';
  while (string.length > 1) {
    newString += string.charAt(0) + string.charAt(string.length - 1) + counter;
    counter++;
    string = string.slice(1, -1);
  }
  return newString;
}

console.log(charConcat('abc def')); //af1be2cd3

//25. ATM
//https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

function solve(n) {
  const nominal = [500, 200, 100, 50, 20, 10];
  let count = 0;

  for (let i = 0; i < nominal.length; i++) {
    while (n >= nominal[i]) {
      n -= nominal[i];
      count++;
    }
  }

  return n === 0 ? count : -1;
}

console.log(solve(666)); //-1

//27. String repeat
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

const repeatStr = (n, s) => s.repeat(n);
console.log(repeatStr(2, 'ha ')); //ha ha

//28. Numbers in strings
//https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/javascript

function solveNum(s) {
  const numberMatches = s.match(/\d+/g); // Витягує всі послідовності цифр та зберігає їх у масиві
  const result = Math.max(...numberMatches.map((num) => parseInt(num)));
  return result;
}
console.log(solveNum('vih61w8oohj5')); //61

//29. Sum of odd numbers(трикутник з непарних чисел)
//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/javascript

const rowSumOddNumbers = (n) => Math.pow(n, 3); //const rowSumOddNumbers = (n) => n ** 3; - ** представляє піднесення числа
//до заданого ступеня(потужність).Це відносно новий оператор,
// і він був доданий до стандарту ECMAScript 2016(ES7).
//---------------------version2----------------
// function rowSumOddNumbers(n) {
//   // Calculate the first number in the nth row
//   const firstNumber = 1 + 2 * (n - 1) * n / 2;

//   // Calculate the sum of n consecutive odd numbers starting from the firstNumber
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += firstNumber + 2 * i;
//   }
//   return sum;
// }
// console.log(rowSumOddNumbers(5));

//30.
//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
  let newFriends = [];
  for (friend of friends) {
    if (friend.length === 4) {
      newFriends.push(friend);
    }
  }
  return newFriends;
}
console.log(friend(['Love', 'Your', 'Face', '1'])); //['Love', 'Your', 'Face'];

//---------------------version2----------------
// function friend(friends) {
//   return friends.filter((name) => name.length === 4);
// }
// console.log(friend(['Love', 'Your', 'Face', '1']));

//31. Two to One
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript

function longest(s1, s2) {
  // Об'єднуємо обидва рядки і перетворюємо їх в масив символів
  const combined = (s1 + s2).split('');

  // Використовуємо Set для автоматичного видалення дублікатів і перетворення на масив неповторюючихся символів
  const uniqueChars = [...new Set(combined)];

  // Сортуємо масив унікальних символів в алфавітному порядку
  const sortedUniqueChars = uniqueChars.sort();

  // З'єднуємо відсортовані символи в один рядок і повертаємо результат
  return sortedUniqueChars.join('');
}
console.log(longest('inmanylanguages', 'theresapairoffunctions')); //acefghilmnoprstuy

//---------------------version2----------------
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');
// console.log (longest("inmanylanguages", "theresapairoffunctions"));

//32. String ends with?
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript

const solution = (str, ending) => str.endsWith(ending);
console.log(solution('abcde', 'cde')); //true

//33.I love big nums and I cannot lie
//https://www.codewars.com/kata/56121f3312baa28c8500005b/train/javascript

const biggest = (nums) =>
  nums
    .map(String) //Конвертуємо всі числа в рядки, щоб порівнювати їх як рядки
    //Визначаємо порядок сортування, в якому спочатку порівнюються два числа
    .sort((a, b) => (b + a).localeCompare(a + b)) //Сортувати у зворотному порядку
    .join('') //Об'єднуємо відсортовані рядки в один рядок
    .replace(/^0+/, '0'); //Відсікаємо можливі нулі в початку результату

console.log(biggest([3, 30, 34, 5, 9])); //9534330
console.log(biggest([0, 0, 0, 0])); //0

//34.Every archer has its arrows
//https://www.codewars.com/kata/559f89598c0d6c9b31000125/javascript

function archersReady(archers) {
  if (archers.length === 0) return false;
  return archers.every((num) => num >= 5);
}

console.log(archersReady([5, 6, 7, 8])); //true

//35.Delete occurrences of an element if it occurs more than n times
//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
  const count = {}; // Об'єкт для відстеження кількості входжень кожного числа
  const newArr = []; // Новий масив без дублікатів

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // Перевіряємо, скільки разів зустрілось дане число !!!!
    count[num] = (count[num] || 0) + 1;

    // Додаємо число до нового масиву, якщо його кількість не перевищує n
    if (count[num] <= n) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]

//36.Longest vowel chain
//https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

function findLongestVowelSequence(s) {
  // Перевірка на порожній рядок або null
  if (!s) {
    return 0;
  }

  // Розділити рядок на послідовності приголосних
  const vowelSequences = s.split(/[^aeiou]+/g);

  // Знайти найбільшу довжину послідовності
  const maxLength = vowelSequences.reduce(
    (max, str) => Math.max(max, str.length),
    0
  );

  return maxLength;
}

console.log(findLongestVowelSequence('iiihoovaeaaaoougjyaw')); // 8
console.log(findLongestVowelSequence('')); // 0
console.log(findLongestVowelSequence(null)); // 0

//37.Non-even substrings
//https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript

function generateOddNumbers(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) % 2 === 1) {
      counter += i + 1;
    }
  }
  return counter;
}

console.log(generateOddNumbers('13472315')); //28

//38.Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

function findOdd(A) {
  const numCount = {}; // Об'єкт для зберігання кількостей чисел

  // Рахуємо кількість входжень кожного числа
  //Перевіряємо, чи це число вже існує в об'єкті numCount.
  //Якщо це число ще не було додано, ми встановлюємо для нього початкову кількість 1.
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    if (numCount[num] === undefined) {
      numCount[num] = 1;
    } else {
      numCount[num]++; //В іншому випадку, коли число вже є в numCount, ми збільшуємо його кількість на 1:
    }
  }

  // В цьому циклі ми перебираємо всі ключі (числа) у numCount.
  for (const num in numCount) {
    // Ми перевіряємо, чи кількість входжень числа є непарною.
    //Якщо так, то це число задовольняє умову.
    if (numCount[num] % 2 !== 0) {
      return parseInt(num); // Повертаємо число як число (не рядок)
    }
  }

  // Обробка випадку, коли жодне число не знайдено
  return undefined;
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5

//---------------------version2----------------
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
//використовує оператор побітового включення (^) для знаходження числа,
// яке зустрічається непарну кількість разів у масиві.
//Цей спосіб працює і має лінійну складність (O(n)), що робить його дуже ефективним.
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4
// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5

//39.Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
//https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript
function findPersonWithOddName(list) {
  const oddNamePeople = list.filter((person) => {
    const elements = [...person.firstName].map((char) => char.charCodeAt(0));
    const sum = elements.reduce(
      (accumulator, current) => accumulator + current,
      0
    );
    return sum % 2 !== 0;
  });

  return oddNamePeople || []; // Повертаємо порожній масив, якщо немає співпадінь
}

const list1 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];

console.log(findPersonWithOddName(list1)); // [{ firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' }]

//40.Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
//https://www.codewars.com/kata/582746fa14b3892727000c4f/javascript

const countDevelopersInEurope = (list) =>
  list
    .map(
      (person) =>
        person.continent === 'Europe' && person.language === 'JavaScript'
    )
    .reduce((count, isEuropean) => count + isEuropean, 0);
const list2 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

console.log(countDevelopersInEurope(list2)); //1

//41. Higher-Order Functions Series - Greet developers
//https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

function greetDevelopers(list) {
  list.forEach(function (developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });

  return list;
}

const list3 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

console.log(greetDevelopers(list3));
//[  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', greeting: 'Hi Sofia, what do you like the most about Java?'},
//{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python', greeting: 'Hi Lukas, what do you like the most about Python?' },
//{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby', greeting: 'Hi Madison, what do you like the most about Ruby?' } ];

//---------------------version2----------------
//Версія зі створенням копії вхідного масиву
// const greetDevelopers = (list) => list.map((person) => {
//   // Створюємо копію об'єкта, щоб зберегти початковий об'єкт без змін.
//   const personCopy = { ...person };

//   // Додаємо властивість 'greeting'.
//   personCopy.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}`;

//   return personCopy;
// });

//42.Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
//https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

const isRubyComing = (list) => list.some((dev) => dev.language === 'Ruby');

const list4 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];
console.log(isRubyComing(list4)); //true

//43. Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
//https://www.codewars.com/kata/5827bc50f524dd029d0005f2/javascript

const getFirstPython = (list) => {
  const developer = list.find((dev) => dev.language === 'Python');
  return developer
    ? `${developer.firstName}, ${developer.country}`
    : 'There will be no Python developers';
};

const list5 = [
  {
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python',
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure',
  },
];
console.log(getFirstPython(list5)); //Victoria, Puerto Rico
