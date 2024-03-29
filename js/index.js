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

console.log(findPersonWithOddName(list1));

//40.Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
//https://www.codewars.com/kata/582746fa14b3892727000c4f/javascript

// Функція призначена для підрахунку кількості розробників, які працюють у Європі
//і використовують мову програмування JavaScript
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

// Функція призначена для додавання привітання до об'єктів розробників у списку
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

// Функція призначена для перевірки, чи є хоча б один розробник у списку розробників
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

// Функція призначена для знаходження першого розробника, який використовує мову програмування "Python"
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

//44. Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
//https://www.codewars.com/kata/5828713ed04efde70e000346/javascript

// Функція призначена для обчислення кількості розробників, які працюють кожною
// з унікальних мов програмування у списку розробників
function countLanguages(list) {
  const objLanguages = {};
  for (const dev of list) {
    const value = dev.language; // Отримуємо мову поточного об'єкта
    if (objLanguages[value] === undefined) {
      objLanguages[value] = 1;
    } else {
      objLanguages[value]++;
    }
  }
  return objLanguages;
}

const list6 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
  },
];
console.log(countLanguages(list6)); //{ C: 2, JavaScript: 1, Ruby: 1 }

//---------------------version2----------------
//Замість об'єкта для зберігання кількості розробників для кожної мови програмування,
//ми можемо використовувати Map, що забезпечить більшу гнучкість!!!
// і підтримку для будь - яких ключів(не лише рядків)!!!!

// function countLanguages(list) {
//   const languageMap = new Map(); //ств-мо колекцію Map;

//Map в JavaScript - це колекція, що дозволяє зберігати ключ - значення
//та надає більшу гнучкість для зберігання та операцій над даними, порівняно з об'єктом (Object).

//   for (const dev of list) {
//     const language = dev.language;
//     const count = languageMap.get(language) || 0;
//     languageMap.set(language, count + 1);
//   }
//   return Object.fromEntries(languageMap); //перетворення об'єкта типу Map (в даному випадку languageMap) на об'єкт типу Object;
// }

//45.Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
//https://www.codewars.com/kata/58287977ef8d4451f90001a0/javascript

// Функція призначена для перевірки, чи всі розробники у заданому списку
// працюють з однією і тією ж мовою програмування.
const isSameLanguage = (list) => {
  // Перевіряємо, чи переданий список і чи він не порожній
  if (!list || list.length === 0) {
    return false;
  }

  const languages = list.map((dev) => dev.language); //['JavaScript', 'JavaScript', 'JavaScript']
  const uniqueLanguages = new Set(languages); //{'JavaScript'}

  return uniqueLanguages.size === 1; // 1 === 1 => true
};
//---------------------version2----------------
//можна повернути результат перевірки без використання додаткових змін:
// const isSameLanguage = (list) => {
//   if (!list || list.length === 0) {
//     return false;
//   }

//   return new Set(list.map((dev) => dev.language)).size === 1;
// };

const list7 = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 65,
    language: 'JavaScript',
  },
];

console.log(isSameLanguage(list7)); // true

//46.Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
//https://www.codewars.com/kata/582887f7d04efdaae3000090/javascript

// Функція призначена для знаходження розробників з найвищим віком у списку розробників
function findSenior(list) {
  // Перевірка на пустий список або відсутність списку
  if (!list || list.length === 0) {
    return null;
  }

  // Знаходження максимального віку
  const maxAge = Math.max(...list.map((dev) => dev.age));

  // Фільтрація розробників з максимальним віком
  const seniorDevelopers = list.filter((dev) => dev.age === maxAge);

  return seniorDevelopers;
}
const list8 = [
  {
    firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 49,
    language: 'PHP',
  },
  {
    firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 38,
    language: 'Python',
  },
  {
    firstName: 'Emilija',
    lastName: 'S.',
    country: 'Lithuania',
    continent: 'Europe',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP',
  },
];
console.log(findSenior(list8));

//47. Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
//https://www.codewars.com/kata/58291fea7ff3f640980000f9/javascript

// Функція призначена для перевірки, чи присутні всі континенти з заданого списку
function allContinents(list, allContinentsList) {
  if (!list || list.length === 0) {
    return false;
  }

  const continentsInList = new Set(list.map((dev) => dev.continent));

  for (const continent of allContinentsList) {
    if (!continentsInList.has(continent)) {
      return false;
    }
  }
  return true;
}
const allContinentsList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; //варто використовувати змінну або отримувати цей масив
// як параметр функції.Це зробить функцію більш загальним і зручним для використання в майбутньому.
const list9 = [
  {
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript',
  },
  {
    firstName: 'Agustín',
    lastName: 'M.',
    country: 'Chile',
    continent: 'Americas',
    age: 37,
    language: 'C',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Laia',
    lastName: 'P.',
    country: 'Andorra',
    continent: 'Europe',
    age: 55,
    language: 'Ruby',
  },
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 65,
    language: 'PHP',
  },
];
console.log(allContinents(list9, allContinentsList)); //true

//48. Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
//https://www.codewars.com/kata/5829ca646d02cd1a65000284/javascript

// Функція призначена для перевірки, чи включає список розробників представників різних вікових груп
function isAgeDiverse(list) {
  const ageGroups = [
    { min: 10, max: 19 },
    { min: 20, max: 29 },
    { min: 30, max: 39 },
    { min: 40, max: 49 },
    { min: 50, max: 59 },
    { min: 60, max: 69 },
    { min: 70, max: 79 },
    { min: 80, max: 89 },
    { min: 90, max: 99 },
    { min: 100, max: Infinity },
  ];

  const ageGroupPresence = ageGroups.map(() => false); // [false, false, false, false, false, false, false, false, false,false]

  for (const dev of list) {
    const age = dev.age;
    for (let i = 0; i < ageGroups.length; i++) {
      if (age >= ageGroups[i].min && age <= ageGroups[i].max) {
        ageGroupPresence[i] = true;
        break; // Перериваємо, якщо знайдено віковий діапазон
      }
    }
  }

  return ageGroupPresence.every((presence) => presence); //перевіряє, чи всі елементи масиву мають значення true
}
const list10 = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Noa',
    lastName: 'A.',
    country: 'Israel',
    continent: 'Asia',
    age: 40,
    language: 'Ruby',
  },
  {
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 59,
    language: 'C',
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 60,
    language: 'C',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 75,
    language: 'Python',
  },
  {
    firstName: 'Chloe',
    lastName: 'K.',
    country: 'Guernsey',
    continent: 'Europe',
    age: 88,
    language: 'Ruby',
  },
  {
    firstName: 'Viktoria',
    lastName: 'W.',
    country: 'Bulgaria',
    continent: 'Europe',
    age: 98,
    language: 'PHP',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
  },
];

console.log(isAgeDiverse(list10)); //true

//49.Coding Meetup #10 - Higher-Order Functions Series - Create usernames
//https://www.codewars.com/kata/582a53ed261c2af9d200018c/javascript

// Функція призначена для додавання імен користувачів (username) до об'єктів розробників у списку
function addUsername(list) {
  const currentYear = new Date().getFullYear(); //отримання поточного року
  list.forEach(function (developer) {
    const birthYear = currentYear - developer.age; //рік народження учасника
    developer.username = `${developer.firstName}${developer.lastName.charAt(
      0
    )}${birthYear}`.toLocaleLowerCase();
  });
  return list;
}

const list11 = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
];
console.log(addUsername(list11));

//50.Coding Meetup #11 - Higher-Order Functions Series - Find the average age
//https://www.codewars.com/kata/582ba36cc1901399a70005fc/javascript

// Функція для обчислення середнього віку розробників у списку
function getAverageAge(list) {
  const ageDeveloper = list.map((dev) => dev.age);
  const sumAge = ageDeveloper.reduce((acc, current) => acc + current, 0);
  const middleAge = Math.round(sumAge / ageDeveloper.length);
  return middleAge;
}
const list12 = [
  {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python',
  },
];
console.log(getAverageAge(list12));

//51.Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
//https://www.codewars.com/kata/582dace555a1f4d859000058/javascript

// Функція призначена для пошуку та фільтрації розробників зі списку,
// які є адміністраторами GitHub і працюють з певною мовою програмування.
function findAdmin(list, lang) {
  const filteredList = list.filter(
    (dev) => dev.githubAdmin === 'yes' && dev.language === lang
  );

  return filteredList;
}

const list13 = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 49,
    language: 'Ruby',
    githubAdmin: 'no',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 34,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
    githubAdmin: 'no',
  },
];

console.log(findAdmin(list13, 'JavaScript'));

//52.Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
//https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript

// функція призначена для перевірки, чи є розподіл розробників за мовами програмування різноманітним
function isLanguageDiverse(list) {
  const languageMap = new Map();

  // Створення мапи, де ключ - мова, значення - кількість розробників, які володіють цією мовою.
  for (const dev of list) {
    const language = dev.language;
    const count = languageMap.get(language) || 0;
    languageMap.set(language, count + 1); // Лічильник для обраної мови
  }

  // Створення масиву кількостей розробників кожної мови та сортування його в порядку спадання.
  const arrNumLanguages = Array.from(languageMap.values()).sort(
    (a, b) => b - a
  );

  // Знаходження найбільшої кількості розробників мови.
  const maxNumLanguage = arrNumLanguages[0];

  // Перевірка, чи кожна інша мова має щонайменше половину розробників найбільшої мови.
  const isTwiceAsMany = arrNumLanguages
    .slice(1)
    .every((num) => num * 2 >= maxNumLanguage);

  return isTwiceAsMany;
}

const list14 = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'Ruby',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'Ruby',
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 95,
    language: 'JavaScript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 18,
    language: 'JavaScript',
  },
  {
    firstName: 'Joao',
    lastName: 'D.',
    country: 'Portugal',
    continent: 'Europe',
    age: 25,
    language: 'JavaScript',
  },
];
console.log(isLanguageDiverse(list14));

//53.Coding Meetup #14 - Higher-Order Functions Series - Order the food
//https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

//функція призначена для обробки списку об'єктів та підрахунку кількості кожної страви у списку
function orderFood(list) {
  const foodMap = new Map();

  // Цикл для підрахунку кількості кожної страви
  for (const dev of list) {
    const food = dev.meal;
    const count = foodMap.get(food) || 0;
    foodMap.set(food, count + 1);
  }

  // Перетворення об'єкта типу Map на об'єкт типу Object
  const foodObject = Object.fromEntries(foodMap);

  return foodObject;
}

const list15 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
    meal: 'vegetarian',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
    meal: 'standard',
  },
  {
    firstName: 'Ramona',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
    meal: 'vegan',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
    meal: 'vegetarian',
  },
];
console.log(orderFood(list15));

//54.Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
//https://www.codewars.com/kata/583a8bde28019d615a000035/javascript

//Функція фільтрує масив, залишаючи лише розробників, чиє ім'я має непарну суму ASCII-кодів символів в імені.
function findOddNames(list) {
  return list.filter((dev) => {
    const firstNameCharSum = dev.firstName
      .split('')
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return firstNameCharSum % 2 !== 0;
  });
}

const list16 = [
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
console.log(findOddNames(list16));

//55.Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
//https://codewars.com/kata/583d972b8bbc0402cf000121/javascript

//функція призначена для перевірки об'єктів розробників на наявність недостаючої інформації
// та створення запитів для відсутніх даних, якщо такі є.
function askForMissingDetails(list) {
  return list
    .map((dev) => {
      // Створюємо копію об'єкта, щоб зберегти початковий об'єкт без змін.
      const developerCopy = { ...dev };

      for (let key in developerCopy) {
        if (developerCopy[key] === null) {
          developerCopy.question = `Hi, could you please provide your ${key}.`;
        }
      }
      return developerCopy;
    })
    .filter((developerCopy) => developerCopy.question);
}

const list17 = [
  {
    firstName: null,
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
    language: null,
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
console.log(askForMissingDetails(list17));

//56.Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
//https://www.codewars.com/kata/583ea278c68d96a5fd000abd/javascript

//Функція sortByLanguage призначена для сортування масиву розробників за мовою програмування,
//яку вони використовують.Якщо розробники використовують однакову мову, то сортування відбувається за їхніми іменами.
function sortByLanguage(list) {
  list.sort((a, b) => {
    if (a.language < b.language) {
      return -1;
    } else if (a.language > b.language) {
      return 1;
    } else {
      // Якщо мови однакові, сортуємо за іменем
      if (a.firstName < b.firstName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      }
    }
    return 0;
  });
  return list;
}

//---------------------version2----------------
//використовує бібліотеку Lodash.
// function sortByLanguage(list) {
//   return require('lodash').sortBy(list, 'language', 'firstName');
// }

const list18 = [
  {
    firstName: 'Nikau',
    lastName: 'R.',
    country: 'New Zealand',
    continent: 'Oceania',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Precious',
    lastName: 'G.',
    country: 'South Africa',
    continent: 'Africa',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 30,
    language: 'C',
  },
  {
    firstName: 'Agustin',
    lastName: 'V.',
    country: 'Uruguay',
    continent: 'Americas',
    age: 19,
    language: 'JavaScript',
  },
];
console.log(sortByLanguage(list18));

//57.Replace With Alphabet Position
//https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

//функція призначена для перетворення тексту у послідовність чисел, які відповідають позиціїм букв в англійському алфавіт
function alphabetPosition(text) {
  const result = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (/^[a-z]$/.test(char)) {
      //перевіряємо чи char (літера) є малою літерою англійського алфавіту від 'a' до 'z'.
      result.push(char.charCodeAt(0) - 'a'.charCodeAt(0) + 1); //перетворення літери у відповідне число
    }
  }

  return result.join(' ');
}
console.log(alphabetPosition('The narwhal bacons at midnight.'));

//58.Alphabetized
//https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript

//функція призначена для сортування літер у вхідному рядку
function alphabetized(s) {
  //видаляємо пробіли з вхідного рядку та знаходимо всі послідовності літер.
  const result = s.replace(/\s/g, '').match(/[a-zA-Z]+/g);

  if (result) {
    // об'єднуємо літери в одну стрічку, сортуємо та повертаємо відсортований рядок.
    const sortedString = result
      .join('')
      .split('')
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .join('');
    return sortedString;
  } else {
    //якщо літери не знайдені, повертаємо пусту стрічку.
    return '';
  }
}

//---------------------version2----------------
// const alphabetized = (s) =>
//   s
//     //видаляємо всі символи, які не є літерами (будь-якого регістру)
//     .replace(/[^a-z]/gi, '')
//     //розбиваємо рядок на окремі символи
//     .split('')
//     //сортуємо символи відповідно до локалізованих правил.
//     .sort((a, b) => a.localeCompare(b.toLowerCase()))
//     //об'єднуємо відсортовані символи в одну стрічку.
//     .join('');

console.log(alphabetized('22337788defLlLlnNnNqs')); //"defLlLlnNnNqs"

//59.Replace all items
//https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/train/javascript

//функція призначена для заміни всіх входжень конкретного значення на інше значення у вхідному масиві
function replaceAll(seq, find, replace) {
  // Спочатку ми створюємо копію вхідного рядка або масиву, використовуючи оператор [...seq]
  const arr = [...seq].map((item) => (item === find ? replace : item));

  // Далі ми перевіряємо тип вхідного параметру seq.
  // Якщо seq є рядком, ми з'єднуємо масив arr назад у рядок, використовуючи метод join.
  // Якщо seq не є рядком (припускаючи, що це масив), ми просто повертаємо масив arr.
  return typeof seq === 'string' ? arr.join('') : arr;
}
console.log(replaceAll([1, 2, 2], 1, 2)); //[2, 2, 2]

//60.Sort My Animals
//https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/javascript

//Функція призначена для сортування масиву звірів за кількістю ніг та іменами звірів.
const sortAnimal = (animals) => {
  const copySortAnimals = [...animals];
  copySortAnimals.sort((a, b) => {
    if (a.numberOfLegs < b.numberOfLegs) return -1;
    if (a.numberOfLegs > b.numberOfLegs) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return copySortAnimals;
};

const doTest = [
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Human', numberOfLegs: 2 },
  { name: 'Bird', numberOfLegs: 2 },
];

console.log(sortAnimal(doTest));

//---------------------version2----------------
// const sortAnimal = (animals) => {
//   // Створюємо копію вхідного масиву animals, щоб не змінювати оригінальний масив.
//   const copySortAnimals = [...animals];

//   // Використовуємо метод .sort() для сортування звірів.
//   copySortAnimals.sort((a, b) => {
//     // Обчислюємо різницю кількості ніг між звірами a та b.
//     const legsComparison = a.numberOfLegs - b.numberOfLegs;

//     // Якщо різниця не дорівнює нулю, то повертаємо результат порівняння кількостей ніг.
//     if (legsComparison !== 0) return legsComparison;

//     // Якщо кількість ніг однакова, використовуємо метод .localeCompare() для порівняння імен звірів.
//     return a.name.localeCompare(b.name);
//   });

//   // Повертаємо відсортований масив копії звірів.
//   return copySortAnimals;
// };

//61.Triple Sorting - Sort & Stringify a list by 3 attributes
//https://www.codewars.com/kata/5829c2c8ef8d4474300000fa/javascript

//Функція отримує список об’єктів Student і сортує їх відповідно до вказаних критеріїв.
function sort(students) {
  // Копіюємо вхідний масив студентів, щоб уникнути його змін.
  const copyListStudents = [...students];

  copyListStudents.sort((a, b) => {
    //Сортуємо студентів за gpa у спадаючому порядку
    if (a.gpa > b.gpa) return -1;
    if (a.gpa < b.gpa) return 1;
    //Сортуємо студентів за першою літерою прізвища
    if (a.fullName.split(' ')[1][0] > b.fullName.split(' ')[1][0]) return 1;
    if (a.fullName.split(' ')[1][0] < b.fullName.split(' ')[1][0]) return -1;
    //Сортуємо студентів за віком за зростанням
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });

  // Повертаємо відсортований масив імен у форматі рядка.
  const sortedNames = copyListStudents.map((student) => student.fullName);
  return sortedNames.join(',');
}

class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  }
}
const students = [
  new Student(23, 88, 'David Goodman'),
  new Student(25, 82, 'Mark Rose'),
  new Student(22, 90, 'Jane Doe'),
  new Student(25, 90, 'Jane Dane'),
];
console.log(sort(students));

//62.Sorted list
//https://www.codewars.com/kata/53138a5dbb244a40680000a3/train/javascript

//Клас SortedList дозволяє додавати числа до списку та отримувати їх за індексом, і при цьому список завжди залишається впорядкованим
class SortedList {
  //Створюємо порожній список, в який ми будемо класти числа
  constructor(initialList = []) {
    //створюємо копію списка
    this.list = [...initialList];
    this.list.sort((a, b) => a - b); // Сортуємо список
  }

  // Цей метод дозволяє додати число до списку
  add(val) {
    //Перевіряємо, де вставити нове число, щоб список залишався впорядкованим.
    const ix = this.list.findIndex((i) => i > val);
    //Якщо при виконанні методу findIndex() не було знайдено жодного збігу,
    //поверне - 1 => тоді кладемо дане число в кінець списку(тобто наше число є найбільшим)
    if (ix < 0) this.list.push(val);
    // В іншому випадку, вставляємо число на відповідне місце, перед числом, яке більше за нього.
    else this.list.splice(ix, 0, val);
  }

  //Метод, який дозволяє отримати число за індексом 'ix'
  get(ix) {
    //Якщо індекс виходить за межі списку, то цей метод видасть помилку.
    if (ix < 0 || ix >= this.list.length) {
      throw new Error('Invalid index');
    }
    //В іншому випадку, він поверне число за заданим індексом.
    return this.list[ix];
  }

  //Створюємо властивість, яка повертає кількість чисел у списку
  get length() {
    return this.list.length;
  }
}

const sortedList = new SortedList([45, 1, 10]);
sortedList.add(3);
sortedList.add(2);

console.log(sortedList.get(0)); // 1
console.log(sortedList.get(1)); // 2
console.log(sortedList.length);// 5
console.log(sortedList.list);// [1, 2, 3, 10, 45]
// console.log(sortedList.get(7)); // Error('Invalid index')

// 63. Training JS #9: loop statement --while and do..while
// https://www.codewars.com/kata/57216d4bcdd71175d6000560/javascript

// Функція додає '*' символи до початку і кінця рядка str у залежності від парності n,
//  повертаючи модифікований рядок.
function padIt(str, n) {
  let copyString = str;
  let count = 0;

  while (count < n) {
    if (count % 2 === 0) {
      copyString = "*" + copyString; // Add '*' to the beginning of the line
    } else {
      copyString = copyString + "*"; // Add '*' to the end of the line
    }
    count++;
  }
  return copyString;
}

console.log(padIt("a", 2));

// 64. https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/javascript

// Функція, яка обробляє два масиви
function process2Arrays(arr1, arr2) {
  // Створюємо множини з масивів
  const setArr1 = new Set(arr1);
  const setArr2 = new Set(arr2);

  // Знаходимо спільні елементи
  const presentInArrays = new Set(
      [...setArr1].filter((item) => setArr2.has(item)),
  );

  // Знаходимо унікальні елементи в кожному масиві
  const uniqueValueArr1 = new Set(
      [...setArr1].filter((item) => !presentInArrays.has(item)),
  );
  const uniqueValueArr2 = new Set(
      [...setArr2].filter((item) => !presentInArrays.has(item)),
  );

  // Знаходимо елементи, які присутні в обох масивах
  const presentInBothArrays = new Set([...uniqueValueArr1, ...uniqueValueArr2]);

  return [
    presentInArrays.size,
    presentInBothArrays.size,
    uniqueValueArr1.size,
    uniqueValueArr2.size,
  ];
}

const arr1 = [
  33, 2, 3, 37, 38, 40, 12, 10, 43, 44, 47, 49, 8, 19, 22, 24, 26, 28, 29, 30,
];
const arr2 = [1, 34, 17, 7, 9, 10, 43, 49, 22, 27, 28];
console.log(process2Arrays(arr1, arr2)); // [5, 21, 15, 6]

//65. https://www.codewars.com/kata/571d2e9eeed4a150d30011e7/javascript

function scoreboard(participants) {
  const scoreboard = participants.map((participant) => {
    const { name, chickenwings, hamburgers, hotdogs } = participant;
    const score =
      chickenwings * points.forOneChickenwing +
      hamburgers * points.forOneHamburger +
      hotdogs * points.forOneHotdog;
    return { name, score };
  });

  return sortByScore(scoreboard);
}

function sortByScore(list) {
  return list.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

const points = {
  forOneChickenwing: 5,
  forOneHamburger: 3,
  forOneHotdog: 2,
};

const whoAteWhat = [
  { name: 'Billy The Beast', chickenwings: 17, hamburgers: 7, hotdogs: 8 },
  { name: 'Habanero Hillary', chickenwings: 5, hamburgers: 17, hotdogs: 11 },
  { name: 'Joey Jaws', chickenwings: 8, hamburgers: 8, hotdogs: 15 },
  { name: 'Big Bob', chickenwings: 20, hamburgers: 4, hotdogs: 11 },
];

console.log(scoreboard(whoAteWhat));

//---------------------version2----------------
// function scoreboard(participants, scoringPoints) {
//   return participants
//     .map(({ name, chickenwings, hamburgers, hotdogs }) => ({
//       name,
//       score:
//         chickenwings * scoringPoints.forOneChickenwing +
//         hamburgers * scoringPoints.forOneHamburger +
//         hotdogs * scoringPoints.forOneHotdog,
//     }))
//     .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
// }
// console.log(scoreboard(whoAteWhat, points));
//(щоб забезпечити більшу гнучкість, можна розглянути можливість
//передачі цих балів як аргумент у функцію scoreboard)

//---------------------version3----------------
//(Якщо кількість страв може змінюватися!)
function calculateScore(participants, scoringPoints) {
  return participants.map((participant) => {
    const score = Object.keys(participant)
      .filter((key) => key !== 'name' && scoringPoints[key])
      .reduce((total, key) => total + participant[key] * scoringPoints[key], 0);

    return { name: participant.name, score };
  });
}

function sortByScore1(participants) {
  return participants.sort(
    (a, b) => b.score - a.score || a.name.localeCompare(b.name),
  );
}

const points1 = {
  chickenwings: 5,
  hamburgers: 3,
  hotdogs: 2,
  // Додаткові страви та їх бали можна додати тут
};

const whoAteWhat1 = [
  { name: "Billy The Beast", chickenwings: 17, hamburgers: 7, hotdogs: 8 },
  { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
  { name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
  { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 }
  // Можна додати нових учасників із різними стравами тут
];

const scoredParticipants = calculateScore(whoAteWhat1, points1);
const sortedParticipants = sortByScore1(scoredParticipants);

console.log(sortedParticipants);

// 66. https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

Array.prototype.square = function () {
  return this.map((n) => n * n);
};

Array.prototype.cube = function () {
  return this.map((n) => n * n * n);
};

Array.prototype.average = function () {
  return this.length === 0
    ? NaN
    : this.reduce((acc, n) => acc + n, 0) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((acc, n) => acc + n, 0);
};

Array.prototype.even = function () {
  return this.filter((n) => n % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((n) => n % 2 !== 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square()); // [1, 4, 9, 16, 25]
console.log(numbers.cube()); // [1, 8, 27, 64, 125]
console.log(numbers.average()); // 3
console.log(numbers.sum()); // 15
console.log(numbers.even()); // [2, 4]
console.log(numbers.odd()); // [1, 3, 5]

// 67. https://www.codewars.com/kata/5783ef69202c0ee4cb000265/javascript

// Функція для пошуку масиву в двовимірному масиві
function searchArray(arrayToSearch, query) {
  // Перевірка валідності вхідних даних
  arrayCheck(arrayToSearch, query);

  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arraysEqual(arrayToSearch[i], query)) {
      return i;
    }
  }
  return -1;
}

// Функція для перевірки коректності вхідних даних
function arrayCheck(arrayToSearch, query) {
  if (
    !Array.isArray(query) ||
    query.length !== 2 ||
    !Array.isArray(arrayToSearch) ||
    !arrayToSearch.every(
      (subArray) => Array.isArray(subArray) && subArray.length === 2,
    )
  ) {
    throw new Error('Помилка: невірний формат вхідних даних');
  }
}

// Функція для порівняння двох масивів на рівність
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

//----version2 function arraysEqual----------------
// function arraysEqual(a, b) {
//   return a.length === b.length && a.every((val, index) => val === b[index]);
// }

const arrayToSearch = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(searchArray(arrayToSearch, [1, 2])); // 0
console.log(searchArray(arrayToSearch, [5, 6])); // 2
console.log(searchArray(arrayToSearch, [9, 2])); // -1

// 68. https://www.codewars.com/kata/5905871c00881d0e85000015/javascript
function calculateJuicePrice(fruitsArr) {
   // Внутрішня функція для перевірки, чи вхідний масив містить тільки непорожні рядки
  function validateInput(arr) {
    if (
      !Array.isArray(arr) ||
      arr.length === 0 ||
      !arr.every((item) => typeof item === 'string' && item.trim() !== '')
    ) {
      throw new Error('Помилка: невірний формат вхідних даних');
    }
  }

  validateInput(fruitsArr);

  // Встановлення цін для різних категорій фруктів
  const fruitPrices = new Map([
    ['banana', 5],
    ['orange', 5],
    ['apple', 5],
    ['lemon', 5],
    ['grapes', 5],
    ['avocado', 7],
    ['strawberry', 7],
    ['mango', 7],
  ]);
  const defaultPrice = 9;

  // Обчислення загальної вартості соку з вибраних фруктів
  const total = fruitsArr.reduce((sum, fruit) => {
    const fruitName = fruit.toLowerCase().trim();
    return sum + (fruitPrices.get(fruitName) || defaultPrice);
  }, 0);

  return Math.round(total / fruitsArr.length);
}

const fruitMix = ['Mango', 'Banana', 'Avocado'];
console.log(calculateJuicePrice(fruitMix)); // Виведе вартість соку

// 69. https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

function arrayDiff(list, present) {
  if (!Array.isArray(list) || !Array.isArray(present)) {
    throw new Error('Error: Invalid input format');
  }

  const presentSet = new Set(present);
  return list.filter(item => !presentSet.has(item));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1, 3]

class Jar {
  constructor() {
    this.totalVolume = 0; // Ініціалізація загального об'єму соку в склянці
    this.contents = new Map(); // Ініціалізація карти для зберігання об'єму кожного типу соку
  }

  add(amount, type) {
    // Перевірка валідності вхідних даних
    if (amount <= 0) {
      throw new Error('Кількість соку для додавання має бути більше нуля');
    }

    if (typeof type !== 'string' || type.trim() === '') {
      throw new Error('Тип соку має бути непорожнім рядком');
    }

    this.totalVolume += amount; // Додавання соку до загального об'єму

    // Оновлення об'єму конкретного типу соку
    const currentAmount = this.contents.get(type) || 0;
    this.contents.set(type, currentAmount + amount);
  }

  pourOut(amount) {
    // Перевірка валідності кількості соку для виливання
    if (amount <= 0) {
      throw new Error('Кількість соку для виливання має бути більше нуля');
    }
    if (amount > this.totalVolume) {
      throw new Error('Неможливо вилити більше соку, ніж є в склянці');
    }

    // Обчислення відсотка соку, який буде вилитий
    const pourOutPercentage = amount / this.totalVolume;
    this.totalVolume -= amount; // Виливання соку зі загального об'єму

    // Пропорційне зменшення об'єму кожного типу соку
    this.contents.forEach((volume, type) => {
      this.contents.set(type, volume * (1 - pourOutPercentage));
    });
  }

  getTotalAmount() {
    // Повернення загального об'єму соку в склянці
    return this.totalVolume;
  }

  getConcentration(type) {
    // Повернення концентрації конкретного типу соку
    if (this.totalVolume === 0 || !this.contents.has(type)) {
      return 0;
    }
    return this.contents.get(type) / this.totalVolume;
  }
}

const newJar = new Jar();
newJar.add(200, 'apple');
newJar.add(200, 'banana');
console.log(`Концентрація яблучного соку: ${newJar.getConcentration('apple')}`); // Перед виливанням

newJar.pourOut(200);
console.log(`Концентрація яблучного соку після виливання: ${newJar.getConcentration('apple')}`); // Після виливання

/*Задача "Банківський рахунок"

У цій задачі вам потрібно реалізувати просту модель банківського рахунку.
Реалізуйте клас BankAccount, який дозволить виконувати наступні дії:
Створення рахунку:
Коли створюється новий об'єкт BankAccount, він має мати початковий баланс, який дорівнює нулю.
Депозит (внесення коштів):
Метод deposit(amount) дозволяє додати певну суму грошей на рахунок.
Сума депозиту має бути позитивним числом. Якщо сума не відповідає цій вимозі, повинно виводитися повідомлення про помилку.
Зняття коштів:
Метод withdraw(amount) дозволяє зняти певну суму грошей з рахунку.
Якщо на рахунку недостатньо коштів або введена сума є негативною, повинно виводитися повідомлення про помилку.
Перегляд балансу: Метод getBalance() повертає поточний баланс рахунку.
Історія транзакцій:
Клас також повинен зберігати історію всіх успішних транзакцій депозиту та зняття коштів.
Кожна транзакція повинна містити інформацію про тип операції ('deposit' або 'withdraw'), суму та час проведення транзакції.*/


class BankAccount {
  constructor() {
    this.totalBalance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (typeof amount !== 'number') {
      throw new Error('Введіть число');
    }

    if (amount < 0) {
      throw new Error('Сума депозиту має бути більшою за 0');
    }

    this.totalBalance += amount;
    const transactionDate = new Date().toLocaleString();
    this.transactions.push({
      type: 'deposit',
      amount: amount,
      date: transactionDate,
    });
  }

  withdraw(amount) {
    if (typeof amount !== 'number') {
      throw new Error('Введіть число');
    }

    if (amount < 0) {
      throw new Error('Сума зняття має бути більшою за 0');
    }

    if (amount > this.totalBalance) {
      throw new Error('Недостатньо коштів на рахунку');
    }

    this.totalBalance -= amount;
    const transactionDate = new Date().toLocaleString();
    this.transactions.push({
      type: 'withdraw',
      amount: amount,
      date: transactionDate,
    });
  }

  getBalance() {
    return this.totalBalance;
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

const newAccount = new BankAccount();
newAccount.deposit(100);
newAccount.withdraw(50);
console.log(newAccount);
console.log(newAccount.getBalance());
console.log(newAccount.getTransactionHistory());

/*Задача "Керування складом"

У цій задачі вам потрібно реалізувати систему керування інвентарем для складу.
Ви створите клас InventoryManager, який дозволить виконувати наступні дії:
Додавання товарів: Метод addItem(itemName, quantity) дозволяє додати певну
кількість товару на склад.
Товар представляється назвою (рядком) та кількістю (числом).
Якщо товар вже існує на складі, його кількість має бути оновлена.
Видалення товарів: Метод removeItem(itemName, quantity) дозволяє зменшити
кількість певного товару на складі.
Якщо після видалення кількість товару стає нульовою або меншою, товар повністю
видаляється зі складу.
Перегляд інвентарю: Метод getInventory() повинен повертати поточний список усіх
товарів та їх кількостей на складі.
Пошук товарів: Метод findItem(itemName) дозволяє перевірити, чи є певний товар
на складі, та якщо є, то в якій кількості.
Зберігання історії транзакцій: Клас також повинен зберігати історію всіх додавань
та видалень товарів. Кожна транзакція має містити інформацію про тип операції
('addItem' або 'removeItem'), назву товару, кількість та час проведення транзакції.*/

class InventoryManager {
  constructor() {
    this.listOfGoodsInStock = new Map();
    this.transactions = [];
  }

  // Перевірка назви товару
  validateItemName(itemName) {
    if (typeof itemName !== 'string' || itemName.trim() === '') {
      throw new Error('Назва товару має бути рядком і не може бути порожньою');
    }
  }

  // Перевірка кількості товару
  validateQuantity(quantity) {
    if (typeof quantity !== 'number' || quantity < 0) {
      throw new Error('Кількість має бути числом та не може бути меншою за 0');
    }
  }

  addItem(itemName, quantity) {
    this.validateItemName(itemName);
    this.validateQuantity(quantity);

    const currentQuantity = this.listOfGoodsInStock.get(itemName) || 0;
    this.listOfGoodsInStock.set(itemName, currentQuantity + quantity);

    this.transactions.push({
      type: 'addItem',
      itemName,
      quantity,
      date: new Date().toLocaleString(),
    });
  }

  removeItem(itemName, quantity) {
    this.validateItemName(itemName);
    this.validateQuantity(quantity);

    if (!this.listOfGoodsInStock.has(itemName)) {
      throw new Error('Товар не знайдено');
    }

    const availableQuantity = this.listOfGoodsInStock.get(itemName);
    if (quantity > availableQuantity) {
      throw new Error(`Недостатньо коштів на рахунку. В наявності: ${availableQuantity} одиниць товару`);
    }

    const newQuantity = availableQuantity - quantity;
    if (newQuantity > 0) {
      this.listOfGoodsInStock.set(itemName, newQuantity);
    } else {
      this.listOfGoodsInStock.delete(itemName);
    }

    this.transactions.push({
      type: 'removeItem',
      itemName,
      quantity,
      date: new Date().toLocaleString(),
    });
  }

  getInventory() {
    return Array.from(this.listOfGoodsInStock.entries());
  }

  findItem(itemName) {
    this.validateItemName(itemName);
    return this.listOfGoodsInStock.has(itemName)
      ? `Товар знайдено. Загальна кількість: ${this.listOfGoodsInStock.get(itemName)}`
      : 'Товар не знайдено';
  }
}

const inventoryManager = new InventoryManager();
inventoryManager.addItem('apple', 10);
inventoryManager.addItem('pear', 15);
// inventoryManager.removeItem('apple', 20);

console.log(inventoryManager);
console.log(inventoryManager.getInventory());
console.log(inventoryManager.findItem('apple'));
console.log(inventoryManager.findItem('pear'));
