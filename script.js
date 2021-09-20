
"use strict";
/*
Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

*/


const OPTIONS = {
name:'test',
width:1024,
height:1024,
colors:{
border:'black',
bg:'red'

}
};

console.log(Object.keys(OPTIONS));

/* RUN CODE 

[ 'name', 'width', 'height', 'colors' ]  */

















































//  СЧЕТЧИК  КОЛ-ВА  СВОЙСТВ ВСЕХ  КАТЕГОРИЙ  БЕЗ  ПОДКАТЕГОРИЙ  ОБЬЕКТА ВЕРХНИЙ  УРОВЕНЬ
//let COUNTER = 0;
//for (let key in OPTIONS) {
//if (typeof(OPTIONS[key])  === 'object') {
//for (let i in OPTIONS[key]) {
//   console.log(`Свойство ${i} имеет значение ${OPTIONS[key][i]}`);
//   COUNTER++;
// }

// } else {
//   console.log(`Свойство ${key} имеет значение ${OPTIONS[key]}`);
  //COUNTER++;
//}
///}
//console.log(COUNTER);
/* RUN CODE --- > 4
  */
