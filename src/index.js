import './index.html';
import './index.scss';
import code from './img/code.png'
import { mult, sum } from './modules/calc';

let button = document.querySelector('.header__menu-link');
let menu = document.querySelector('.menu');
button.onclick = () => {
   menu.classList.toggle('menu--active');
}


//****************************************** */

// const ages = prompt('сколько тебе лет ?')

// const userProfile = {
//    name: 'Akhmad',
//    age: ages,
//    comments: 1
// };

// const myFn = ({name, age}) => {
//    if (age < 18) {
//       return `User ${name} слишком мал`
//    }
//    return `User ${name} имеет возраст больше 18 ваш возраст: ${age}`
// }
// alert(myFn(userProfile));

//****************************************** */


// var a = false, b, c = 0 , d = 2;
// if (a) {
//    console.log('а выполнил!');
// } else if (b) {
//    console.log('b выполнил!');
// } else if (c) {
//    console.log('c выполнил!');
// } else if (d) {
//    console.log('d выполнил!');
// } else {
//    console.log('ничего не выполнил!');
// }

//****************************************** */

// var a = 0;
// while (a < 10) {
//    console.log('Посчитано чего то: ' + a + "!");
//    a++;
// }
// console.log('ooooooooopppppppp');

//****************************************** */

let words = [
   "программа",
   "рисунок",
   "тигр",
   "солце"
];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_";
}
let remainingLetters = word.length;
while (remainingLetters > 0) {
   alert(answerArray.join(" "));
   let guess = promt("Угадайте букву или нажмите Отмена для выхода из игры");
   if (guess === null) {
      break;
   } else if (guess.length !== 1) {
      alert("Пожалуйста введите тольео одну букву.");
   } else {
      for (let j = 0; j < word,length; j++) {
         if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
         }
      }
   }
}
alert(answerArray.join(" "));
alert("Отлично! было загадано слово " + word);
