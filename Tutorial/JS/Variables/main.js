// var, let, const

var name = 'John Doe';
console.log(name);

let email = 'address@domain.suffix'
console.log(email);
//reassign it
name = 'Eren'
email = 'eren@gmaiil.com'
console.log(name, email);

// car Global & Local Scope
function show (){
    var num = 5;
    console.log(num);
}

var num = 9;
show()  
console.log(num);

{
    var num = 7;
    console.log(num);
}

console.log(num);