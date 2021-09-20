
"use strict";
// ВЫВОД ВСЕХ СВОЙСТВ И ПОДСВОЙСТВ ( ИЛИ  ПОДКАТЕГОРИЙ  ДАННЫХ ОБЬЕКТА)
const OPTIONS = {
name:'test',
width:1024,
height:1024,
colors:{
border:'black',
bg:'red'

}
};
//console.log(OPTIONS["colors"]["border"]);
// RUN CODE ---> black




//delete OPTIONS.name;

//console.log(OPTIONS);
// ВЫВОД ВСЕХ СВОЙСТВ И ПОДСВОЙСТВ ( ИЛИ  ПОДКАТЕГОРИЙ  ДАННЫХ ОБЬЕКТА)
for (let key in OPTIONS) {
if (typeof(OPTIONS[key])  === 'object') {
for (let i in OPTIONS[key]) {
  console.log(`Свойство ${i} имеет значение ${OPTIONS[key][i]}`);
}

} else {
  console.log(`Свойство ${key} имеет значение ${OPTIONS[key]}`);
}



}
/* RUN CODE 

Свойство name имеет значение test
Свойство width имеет значение 1024
Свойство height имеет значение 1024
Свойство border имеет значение black
Свойство bg имеет значение red */

/*
ССЫЛКА  НА  ВСЮ  ИНФОРМАЦИЮ  ПО  ОБЬЕКТУ

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object  */