//PRIMIIVE

//number
const age = 45;
console.log(typeof age);

//boolean
const hasChild = false;
console.log(typeof hasChild);

//null
const car = null;
console.log(typeof car);

//undefined

let test = undefined
console.log(typeof test);

//symbol
const sym = Symbol();
console.log(sym);

//REFERENCE TYPES - Objects


//Array
const hobbies = ['coding', 'cooking'];
console.log(typeof hobbies);

//Object literal
const address = {
    city: 'Dubai',
    country: 'UAE'
}

console.log(typeof address);

//date
const today = new Date()
console.log(typeof today);

let x = {
    name:'EREN',
    age: 30
}

let y = 1200;
let a,b;
a = x;

console.log(a);
x.name = 'Ahmet'
console.log(a);