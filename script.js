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
//let password = String(prompt('Введите пароль'));//1

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

//let a = 2;//4
//let b = 3;//
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

let clientOS = Number(prompt('Какой операционной системой пользуетесь? Если iOS нажмите 0, Android - 1'));
let clientDeviceYear = Number(prompt('Какого года выпуска Ваш смартфон?'))

if (clientOS = 0 && clientDeviceYear < 2015) {
  alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS = 1 && clientDeviceYear < 2015) {
  alert('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS = 0 && clientDeviceYear >= 2015) {
  alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS = 1 && clientDeviceYear >= 2015) {
  alert('Установите версию приложения для Android по ссылке');
} else {
  alert("Некорректное значение переменной clientOS");
}
