


// let nu1 = prompt("Введи первое число");
// let nu2 = prompt("Выберете действие: /, +, *, -");
// let nu3 = prompt("Введи второе число");

// alert (calc(nu1,nu2,nu3));

// let s = calc(nu1,nu2,nu3);
// while(1){if(confirm("продолжаем работу с числом? да/нет"));
// let nu2 = prompt("Выберете действие: /, +, *, -");
// let nu3 = prompt("Введи второе число");
// alert(calc(s,nu2,nu3));
// s = calc(s,nu2,nu3);

// }








// function calc (x,y,b){
// let s = 0;
// switch(y) {
//     case'-':
//      s = x - b;
//     break;
//     case'+':
//      s = Number(x) + Number(b);
//     break;   
//     case'*':
//      s = x * b;
//     break;
//     case'/':
//      s = x / b;
//     break;
//    }
  
//    return (s);
   
// }

//  const x = function (a, b) {
//      return a*b;
//  } 
//  console.log (2, 2)

// const pow = (a, b) => {
//     if (a === 0) {
//        return 1; 
//     }
//     return a * pow(a, b - 1);
// }

// let func = function () {
//     return "текст";
// }
// let func = () => "текст"; //аналог первой записи

// let func = a => a * 100;
// alert (a);

// let func = (question, yes, no) => ? 
// question, 

// let key = prompt(`введи ключ`);

// const user = {
//     [key]: `гена`,
// };

// console.log(user);


//ДЗ 10.05.2022

// let user = {
//     name: "Daniil",
//     age: 28,
// };
// let clone = {}

// for (let key in user) {
//     clone[key] = user[key]
// }
// alert(user.name)
 
//11.05


// функция конструктор 

// д/з
// function User(name, weight, price, quantity){
//     this.name = name;
//     this.weight = weight;
//     this.price = price;
//     this.quantity = quantity;
//     this.getName = function () {
//         alert(this.name);
    
        
//     }
// }
// let user = new User();
