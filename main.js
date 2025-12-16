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

//object literals are literary key value pairs like dictionary 
const person = {
    firstname : 'akshat',
    lastname: 'vats',
    age : 21,
    hobbies:['football', 'music'],
    address: {
        street : 'number 1'

    }
}

console.log(person)
console.log(person.firstname, person.lastname)
console.log(person.hobbies[1])
console.log(person.address.street)

// to add something
person.email = 'abc@gmail.com'
console.log(person)

//json is omething that we send to server suppose you have to send person as a json file for that you have to 
const toJson = JSON.stringify(person);
console.log(toJson)

//for loop
for(let i = 0; i<10; i++){
    console.log(`for loop number: ${i}`)
}

//while loop
let i = 0
while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}

//to iterate through an array
for(let t of fruits){
        console.log(t);
}

//higher order iterations forEach, map, filter
const todos = [
    {
        id: 1,
        name: 'john',

    },
    {
        id: 2,
        name: 'simran'
    },
    {
        id: 3,
        name: 'zeeku'
    }
]
//forEach 
todos.forEach(function(todo){
        console.log(todo.id)
})

//map 
const Todoss =  todos.map(function(todo){
            return (todo.name);
})

console.log(Todoss);

// == just matches value not datatypes and === matches the datatypes as well

//if and else
const x = 4
const y = 5
if(x>2 || y<6){
    console.log('yippiekayeee')
}
else{
    console.log('sad')
}

//ternary operator
const a = 11
 const color  = a>10?'red':'blue';
 console.log(color);

 //functions 
 function Addnums(num1,num2){
    return num1 + num2
 }

 console.log(Addnums(5,6))

 //arrow functions 
 const addNums = (num1 = 5) => num1+5;
 console.log(addNums(12))