
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
////console.log(OPTIONS.name);

//delete OPTIONS.name;

//console.log(OPTIONS);

for (let key in OPTIONS) {
console.log(`Свойство ${key} имеет значение ${OPTIONS[key]}`);


}
/* RUN CODE 

Свойство name имеет значение test
Свойство width имеет значение 1024
Свойство height имеет значение 1024
Свойство colors имеет значение [object Object]*/
