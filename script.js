// let a = '10'; //1
// alert (a); //

// let a = '20'; //1
// alert (a); //

//const year = Number (2007);//2
//alert('Первый iphone вышел в продажу 2007 года');//

//const creator = String('Брендан Айк');//3
//alert ('Создатель Java Script является Брендан Айк')//

//let x = 10;//4
//let y = 2;//
//alert(x+y);//
//alert(x-y);//
//alert(x*y);//
//alert(x/y);//

//let result = 2**5;//5
//alert(result);//

//let a = 9;//6
//let b = 2;//
//alert(a % b);//

//let num = 1;//7
//num += 5;//
//num -= 3;//
//num *= 7;//
//num /= 3;//
//num += 1;//
//num -= 1;//
//alert(num);//

//let year = Number(prompt('Сколько Вам лет?'))//8
//alert('Вам '+ year + ' лет!')//

//let user = { name: "John", years: 30 };//9
// let {name, years: age, isAdmin = false} = user;//
  //alert( name ); // Olya//
  //alert( age ); // 30//
  //alert( isAdmin ); // false//
  //user['city of residence'] = Vyborg;//
  //user ['age'] = 25;//
  //console.log(user);//
  //delete user ['city of residence'];//
//let info = prompt("Какую информацию хотите узнать о пользователе?", "name");//

//let name = prompt('Как Вас зовут?');//
//alert('Привет ' + name + '!')//


                        //HOMEWORK 3//
//let password = (prompt('Введите пароль'));//1

//if (password == 'пароль') {
//  alert ('Пароль введён верно');
//} else {
 // alert ('Пароль введён не верно');
//}

//let num = 3;//2
//let num = 0;
//let num = 10;
//let num = - 3;
//let num = 2;
//if (num > 0 && num < 10) {
//	console.log ('Верно');
//} else {
//	console.log ('Неверно');
//}

//let d = 5;//3
//let e = 175;

//if (d > 100 || e > 100) {
 // console.log ('Верно');
//} else {
 // console.log ('Неверно');
//}

//let a = '2';//4
//let b = '3';//
//alert(a + b);//

//let monthNumber = Number(prompt('Какой месяц по счету сейчас?'));//5

//switch (monthNumber) {
 // case 1:
  //case 2:
  //case 12:
  //  alert('Принадлежит к сезону - зима!');
  //  break;
 //case 3:
 // case 4:
 // case 5:
  //  alert('Принадлежит к сезону - весна!');
  //  break;
 // case 6:
 // case 7:
 // case 8:
  // alert('Принадлежит к сезону - лето!');
  // break;
 //case 9:
 //case 10:
 // case 11:
  //  alert('Принадлежит к сезону - осень!');
  //  break;
 // default:
  //  alert('Такого месяца не существует!');
  // break;
//}

//let num = Number(prompt('Пожалуйста, введите любое число'));//7
//alert(num); // NaN, преобразование не удалось//

//if (num % 2 == 0) {
 // alert('Это чётное число!')
//} else {
 // alert('Это нечётное число!')
//}

//let clientOS = 1; // 0 — iOS, 1 — Android//8

//switch (clientOS) {
  //case 0:
 // alert('Установите версию приложения для iOS по ссылке');
 //   break;
  //case 1:
 // alert('Установите версию приложения для Android по ссылке');
  //  break;
 // default:
 // alert("Некорректное значение переменной clientOS");
 //   break;
//}

//let clientOS = Number(prompt('Какой операционной системой пользуетесь? Если iOS нажмите 0, Android - 1'));
//let clientDeviceYear = Number(prompt('Какого года выпуска Ваш смартфон?'))

//if (clientOS === 0 && clientDeviceYear < 2015) {
 // alert('Установите облегченную версию приложения для iOS по ссылке');
//} else if (clientOS === 1 && clientDeviceYear < 2015) {
 // alert('Установите облегченную версию приложения для Android по ссылке');
//} else if (clientOS === 0 && clientDeviceYear >= 2015) {
 // alert('Установите версию приложения для iOS по ссылке');
//} else if (clientOS === 1 && clientDeviceYear >= 2015) {
 // alert('Установите версию приложения для Android по ссылке');
//} else {
 // alert("Некорректное значение переменной clientOS");
//}

                        //HOMEWORK 4//
//let i = 0;//1
//while ( i < 2) {
//   console.log("Привет");
// i++;
//}

//let i = 1;//2
//while (i <= 5) {
//console.log(i); 
//i++;
//}

//let i = 7;//3
//while (i <= 22) {
//console.log(i); 
//i++;
//}

//const name = {//4
//	'Коля': '200',
//	'Вася': '300',
//	'Петя': '400',
//};
//for (let salary in name) {  
//  console.log(`${salary} зарплата ${name[salary]} долларов`); 
//}

//let n = 1000;//5
//num = 0;
//while (n > 50) {n /= 2
 // console.log(n); 
 // num++;
 // }

//num = 5

//let firstfriday = 3; 
///let day = firstfriday;
//while (day <= 31) {
  ///console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
  //day += 7;
//}

                        //HOMEWORK 5//
//const min = (a, b) => a > b ? b : a;//1
//let result = min(8, 4);
//let result = min(6, 6);
//console.log (result);

//const i = (a) => a % 2 == 0 > "Число четное" ? "Число нечетное";//2
 //let result = i(9);
 //console.log (result);

//function number(num) {//3.2
  //return num * num
//}
//console.log(number(7))
// function number(num) { //3.1
 // console.log(number(7))
//}

// function answer() { //4 предполагается, что пользователь вводит  только числа
//   let number = +prompt("Сколько Вам лет?"); 
//   if (number < 0) { 
//     alert("Вы ввели неправильное значение"); 
//   } else if (number >= 0 && number <= 12) { 
//     alert("Привет, друг!"); 
//   } else { 
//     alert("Добро пожаловать!"); 
//  } 
// } 

// function isNumber(num) { //5
//   if (typeof num == "number" && !isNaN(num)) {
//     return true
//   }
//   else if (typeof num == "string"){
//   if (num == "") {
//     return false
//   }
//    num = +num; 
//    if (!isNaN(num)) {
//     return true
//    }
//   }
//   return false
// }

// function multiplyNumbers(num1, num2) {
//  if (isNumber(num1) && isNumber(num2)) {
//   Nubmer(num1) * Number(num2);
//  }
//  return 'Одно или оба значения не являются числом';
// }
// let multiply = multiplyNumbers('я', 7);
// console.log(multiply);

// function number() { //6
//   let n = prompt("Введите число"); 
//  if (isNaN(n)) { 
//     return 'Переданный параметр не является числом'; 
//   } else { 
//    return n ** 3; 
//  } 
// }

//function getCircleArea() {//7
 // return this.R * this.R * π;
//}
//function getCirclePerimeter() {
 // return 2 * π + this.R;
//}
//const circle1 = {
//  R: 2,
//  getArea: getCircleArea,
//  getPerimeter: getCirclePerimeter,
//};
//const circle2 = {
 // R: 7,
 // getArea: getCircleArea,
 // getPerimeter: getCirclePerimeter,
//};
//const π = 3.14;
//console.log(circle1.getArea());
//console.log(circle1.getPerimeter());
//console.log(circle2.getArea());
//console.log(circle2.getPerimeter());

script
function game1() { 
  let num = prompt('Введите номер месяца'); 
  if (num === '12' || num === '1' || num === '2') { 
    alert('ЗИМА'); 
  } else if (num === '3' || num === '4' || num === '5') { 
    alert('ВЕСНА'); 
  } else if (num === '6' || num === '7' || num === '8') { 
    alert('ЛЕТО'); 
  } else if (num === '9' || num === '10' || num === '11') { 
    alert('ОСЕНЬ'); 
  } else { 
    alert('Поиграть не удастся'); 
  } 
}
// function sum(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a / b;
//   }
//  else if (b == 0) {
//     return 'На ноль делить нельзя';
//   }
//   else {return "Параметр не является числом"}
// }
// console.log(sum);


// function multiply(a, b, c) {
//   a = +a;
//   b = +b;
//   c = +c;
//   if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
//     return a * b * c;
//   }
//     else { return NaN;
//     }
//   }



                        //HOMEWORK 6//
// const numbs = [1, 5, 4, 10, 0, 3];//1
// for (let i = 0; i < numbs.length; i++) {
// 	console.log(numbs[i]);
//if (numbs[i] == 10) break;
// }

// const numbs = [1, 5, 4, 10, 0, 3];//2
// console.log(numbs.indexOf(4));

// const numbs = [1, 3, 5, 10, 20];//3
// console.log(numbs.join(' '));

// const array = [];// 4 
// for (let i = 0; i < 3; i++) {
//   const inner_array =[];
//   for (let j = 0; j < 3; j++) {
//     inner_array.push(j + 1)
//   }
//   array.push(inner_array);
// }
// console.log(array);

// const numbs = [1, 1, 1]; //5
// numbs.push(2, 2, 2)
// console.log(numbs);

// const arr = [9, 8, 7, 'a', 6, 5];//6
// arr.sort();
// arr.pop('a');
// console.log(arr);

//console.log([9, 8, 7, 6, 5].includes(+prompt('Введите число')) ? 'Да' : 'Нет');//7

// let str = 'abcdef';//8 
// let arr = str.split('');
// let array = arr.reverse();
// let result = array.join('');
// console.log(result);

// const arrayOne = [[1, 2, 3,],[4, 5, 6]];//9
// const result = [].concat(...arrayOne);
// console.log(result);

// const arr = [];//10
// for (let i = 1; i <= 10; i++) {
// 	let randomInt = Math.floor(Math.random() * 10);
//   arr.push(randomInt);
// }
// console.log(arr);
// for (let i = 0; i < 9; i++) {
//   console.log(arr[i]+arr[i+ 1]);
// }

// const numbers = [1, 2, 3];//11
// function squareArr(numbers) {
//   const result = numbers.map(function(elem) {
//     return elem * elem;
//   });
//   return result;
// }
// console.log(squareArr(numbers));

// let arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// function getLengthWords(arr) { // 12
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultArr.push(arr[i].length);
//   }
//   return resultArr;
// }
// console.log(getLengthWords(arr)); 

// const numbers = [1, -2, 3, -4, 5];//13
// const negativeNumbers = getNegativeOnly(numbers);
// function getNegativeOnly(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(negativeNumbers); 


// Array.from({length: 10}, () => Math.floor(Math.random() * 10)); 14
// function newArray(numberArray.filter({$0 % 2 == 0})) {
//   return newArray;
//   }
// // const newArray = numberArray.filter({$0 % 2 == 0});
// console.log(Array);
// console.log(newArray);

// Array.from({length: 6}, () => Math.floor(Math.random() * 10)); 15
// const getAverage = (numbers) => {
//   let sum = 0; // объявляем переменную, в которой будет храниться сумма всех чисел массива
//   for (let i = 0; i < numbers.length; i += 1) { // инициализируем цикл
//     sum += numbers[i]; // на каждой итерации прибавляем к сумме значение текущего элемента массива
//   }
//   return sum / numbers.length; // возвращаем среднее арифметическое
// };

// console.log(getAverage(Array));

/////////////////////////HOMEWORK 7
// let str = 'js';//1
// console.log(str.toUpperCase());

// const str = ['Кошка', 'Кит', 'Комар', 'Носорог'];//2 ОШИБКА
// const syllable = 'ко';
// const newStr = words();
// function words() {
//   const resultArr =[];
//   str.forEach((product) => {
//     if (product.toLowerCase().startsWith(syllable.toLowerCase())) {
//       console.log(product);
//     }
//   });
//   return resultArr;
// }
// console.log(newStr);

// let num = 32.58884;//3
// Math.floor(num);
// Math.ceil(num);
// Math.round(num);

// const numbers = []; //4
// numbers.push(52, 53, 49, 77, 21, 32)
// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);
// console.log("Наибольшее число: " + maxNumber);
// console.log("Наименьшее число: " + minNumber);

// let num = getRandomInt(1, 10);//5 
// function getRandomInt(minValue, maxValue) {
// return Math.random() * (maxValue - minValue) + minValue;
// }
// console.log(num);

// let taskSix = getRandomArrNumbers(12);//6
// function getRandomArrNumbers(num) {
//   let arr = [];
//   for (let i = 0; i < num / 2; i++) {
//     arr.push(Math.floor(Math.random() * Math.floor(num)));
//   }
//   return arr;
// }
// console.log(taskSix);

// let taskSeven = getRandomArrNumbers(2, 12);//7
//  function getRandomArrNumbers(num1, num2) {
//   return Math.round(Math.random() * (num1 - num2) + num2);
//  }
//  console.log(taskSeven);

// let currentDate = new Date();//8
// console.log(currentDate);

// let currentDate = new Date();//9
// let myDate = new Date(currentDate.setDate(currentDate.getDate()+73));
// console.log(myDate); 

// const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];//10
// const months = ["января", "февраля", "марта", "апреля", "мая", "июня",
// "июля", "августа", "сентября", "октября", "ноября", "декабря"];
// let myDate = new Date();
// let fullDate.toLocaleTimeString('ru-RU') = ("Дата: " + myDate.getDate() + 
// " " + months[myDate.getMonth()] + 
// " " + myDate.getFullYear() + " " + "это - " + days[myDate.getDay()] +
// ". " + "Время:" + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds());
// console.log(fullDate); 

script
function game2() {
  let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  arr = arr.sort(() => 0.5 - Math.random());
  alert(arr);
  let answerOne = prompt('Чему равнялся первый элемент массива?');
  let answerTwo = prompt('Чему равнялся последний элемент массива?');
  if (answerOne === [0] && answerTwo === [6]) { 
        alert("Поздравляю, Вы угадали оба элемента!"); 
      } else if (answerOne === [0] || answerTwo === [6]) { 
        alert("Вы были близки к победе!"); 
      } else { 
        alert("Нет, Вы ответили неверно :("); 
     } 
}
