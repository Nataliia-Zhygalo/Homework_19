
/*Реализовать функцию copy(list) по копированию массива.
Предусмотреть возможность передачи вторым аргументом функции. 
При копировании массива – функция применяется к каждому элементу копируемого массива.

newList = copy(list, function(value){ return value*10; })*/

const list = [1, 2, 3, 4, 5, 6, 'a', true];

function copy(list, func){
    let copyArr = [];
    for (let i = 0; i < list.length; i++) 
    	if(typeof func === "function") {
    for(let i = 0; i < list.length; i++) {
        if(typeof copyArr[i] === "number") copyArr[i] = func(list[i]); 
     } copyArr.push(list[i])    
    } return copyArr;
  } 

let newList = copy(list, function(value){return value * 10;});

console.log(list);
console.log(newList);

