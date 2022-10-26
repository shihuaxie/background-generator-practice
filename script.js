//装完lodash后，引入without方法到我们的js文件，发现并不能用
//import { without } from 'lodash';
//console.log(without); // Cannot use import statement outside a module

var _ = require('lodash');
console.log(_);
var array = [1, 2, 3, 4, 54, 6];
console.log('answer:', _.without(array, 3));
var css = document.querySelector('h3');
var  color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
// console.log(css)
// console.log(color1)
// console.log(color2)
// body.style.background = 'red';

function setGradient (){
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ';'
}
color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)