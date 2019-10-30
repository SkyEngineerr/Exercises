//Creat some arrays
const numbers = [43, 56, 33, 23, 36, 5];
const numbers2 = new Array(43, 56, 33, 23, 36, 5);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {
    a: 1,
    b: 2
}, new Date()];
let val;
//Get array length
val = numbers.length;
//check if is array
val = Array.isArray(mixed);
//Access the array elements
val = numbers[2]
val = mixed[4];
//Edit into the Array
numbers[2] = 100;
//Find index of vaule
val = numbers.includes(33);
//Mutating Arrays
//Add on the end
numbers.push(250)
//Add on the front
numbers.unshift(4)
//Remove item from end
numbers.pop();
//remove item from front
numbers.shift();
//Splice values
val = numbers.splice(0, 1);
console.log(numbers)
console.log(val)

//Slice
val = numbers.slice(1,5)
console.log(val);

//Reverse
numbers.reverse();




