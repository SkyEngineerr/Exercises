// function check (password) {
    
//     if (password.length > 8) {
//         for (let i=0; i<password.length; i++) {
//             if (password[i] ==  "$") {
//                 console.log('valid')
//                 break;
//             }
//         }
//     } else {
//         return console.log('invalid')``
//     }

  
// }

// console.log(check("e$ren1234"));

///////////////////////new exercise

function drEvil (value) {

    if (value > 1000000) {
        console.log (value + ' dollars ' + '(pinky)')
    }

    else {
        console.log('wrong')
    }
}

drEvil (10000001);

///////////////////////// new exercise

function mixUp(string1, string2) {
    return console.log(string2.concat(" ", string1))
}


mixUp('Hello' , 'World');

/////new exercise