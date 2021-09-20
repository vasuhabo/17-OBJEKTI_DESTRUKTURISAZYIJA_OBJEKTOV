
"use strict";

const OPTIONS = {
name:'test',
width:1024,
height:1024,
colors:{
border:'black',
bg:'red'

}
};

//  СЧЕТЧИК  КОЛ-ВА  СВОЙСТВ ВСЕХ  КАТЕГОРИЙ  БЕЗ  ПОДКАТЕГОРИЙ  ОБЬЕКТА ВЕРХНИЙ  УРОВЕНЬ
let COUNTER = 0;
for (let key in OPTIONS) {
//if (typeof(OPTIONS[key])  === 'object') {
//for (let i in OPTIONS[key]) {
//   console.log(`Свойство ${i} имеет значение ${OPTIONS[key][i]}`);
//   COUNTER++;
// }

// } else {
//   console.log(`Свойство ${key} имеет значение ${OPTIONS[key]}`);
  COUNTER++;
//}
}
console.log(COUNTER);
/* RUN CODE --- > 4
  */
