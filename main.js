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

 //object oriented Programming
function Person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
}

//when you do console.log(person1) you will see everything above now suppose you have to hide some functions fdr taht we
//put them in prototype section

//prototype
Person.prototype.getBirthyear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullname = function(){
    return `${this.firstname} ${this.lastname}`
}

//instantiate object
const person1 = new Person('akshat', 'vats', '02-09-2004')
const person2 = new Person('Riya', 'Arora', '11-11-2003')
console.log(person1.dob)
console.log(person2)

//if you check it will not show in console but in the prototype section 
console.log(person1.getBirthyear());

//all of this can be done using classes let me show you
class Apple{
    constructor(firstname,lastname,dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
}

//creating objects
const App = new Apple('akshat', 'vats', '02-09-2004');
console.log(App)
console.log(App.getFullName());

//classes are more organised 

//Dom (document object model)
//Now for example all these alert and other function comes under window function which is the parent of browser
//in window function we have dom which means our document and here we can pick different parts of our html code
//for example

//single elment collector
 const form = document.getElementById('my-form');
 console.log(form);
 const forms = document.querySelector('h1'); 
 console.log(forms);
 //even of there are multiple h1 it will still select the first one as it is a single element selector


 //multiple element collector
//this returns nodelist and you can see that it is like array and you can perform operations on it like you do on arrays
 const items = document.querySelectorAll('.item'); 
 items.forEach((item)=> console.log(item));//helps you to iterate through it 


 //manipulating Dom : basically you can pick a section and manipulate it like below
 const ul = document.querySelector('.items');
 ul.firstElementChild.remove(); //removes the first item like from the list
 ul.lastElementChild.textContent = 'hello' //changes text content
 ul.children[0].innerHTML = '<h1>this is a heading</h1>' // youi can also change the tml dynamically

 const btn = document.querySelector('.btn');
 btn.style.background = 'red';

 // events
  btn.addEventListener('click', (e)=> {
    e.preventDefault(); // doesnt submit the form
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';
  })