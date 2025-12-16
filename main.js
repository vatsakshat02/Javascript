// var let const
//var is globally constant so we don't use it so basically let is the variable 


 //data types in javascript are String, Numbers, Boolean, null, undefined
 const name = 'akshat';
 const age = 21;
 console.log(typeof name);

 //concatenation
 console.log('My name is  ' + name + ' and my age is ' + age)
 //template String
 console.log(`my name is 4 ${ name } and my age is ${age}`)

 //String manipulation
 const s ="akshat vats"
 console.log(s.length);

 console.log(s.substring(0,5));

 console.log(s.split('a'));


 //arrays - variables that hold multiple values (it can have multiple values)

const fruits = ['apple', 'oranges', 'grapes'];
fruits[3] = 'watermelon';
console.log(fruits);
fruits.push('nimbu paani');
fruits.unshift("number one in the game");
console.log(fruits);
console.log(fruits.indexOf('oranges'));