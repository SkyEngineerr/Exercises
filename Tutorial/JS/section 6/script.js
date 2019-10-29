const firstName = "Usame Eren"
const lastName = "Yilmaz"
const age = 32;
const str = "web design , web development, programing";
let val ;
val = firstName + lastName;
// concatination
val = firstName +' '+ lastName;
// Appended
val = "safwan";
val+= 'Kher';
val = 'Hello, My name is' + firstName+'and I am '+age+'years old';
//Escaping
val = 'That\'s awesome, I can\'t wait';
//length
val = firstName.length
//concat()
val = firstName.concat('', lastName);
//change case
val = firstName.toLowerCase();
val = lastName.toUpperCase();
val = lastName[2];
// indexOf()
val = firstName.indexOf('a')
val = firstName.lastIndexOf('a')
console.log(val);
//charAt()
val = firstName.charAt(4)
console.log(val);
