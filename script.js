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
