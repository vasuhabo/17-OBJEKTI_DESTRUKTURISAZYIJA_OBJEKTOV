
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
console.log(OPTIONS.name);

delete OPTIONS.name;

console.log(OPTIONS);