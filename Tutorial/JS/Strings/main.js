function check (password) {
    
     if (password.length > 8) {
         for (let i=0; i<password.length; i++) {
             if (password[i] ==  "$") {
                 console.log('valid')
                 break;
             }
         }
     } else {
         return console.log('invalid')``
     }

  
 }

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

function fixStart(s) {
    var c = s.charAt(0);
    return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
  }

fixStart ('babble')

/////////////////////// new exercise

let str1 = 'The quick brown fox jumps over the lazy dog'
let searchTerm = 'brown'
let replaceBy = 'blue'


console.log(str1.replace(searchTerm, replaceBy));



//////////////////////// new exercise


function check2 (password) {
    
    if (password.length > 8 && password.includes('$')) {
                console.log('valid')  
        }
     else {
        return console.log('invalid')``
    }
}

check2 ('eren$12123')

////////////////////// new exercise

function verbing (str) {
    let newStr = str.slice(str.length-3)
    if (str.length > 3 && newStr == 'ing') {
        console.log(str.concat('ly'))
    }

    else if (str.length > 3) {
        console.log(str.concat('ing'))
    }

    else (
        console.log(str)
    )
}

verbing('going')

/////////////////////////////new exercise

function checkStr (str, word) {
    if (str.includes(word)) {
        console.log(str.replace(word, 'BLACK'));
    }

    else{
        console.log(str);
    }

}

checkStr('The quick brown fox jumps over the lazy dog', 'jumps')

////