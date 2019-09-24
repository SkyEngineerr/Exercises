function myFunction() {
    var person = prompt();
    
    if (person == false) {
        document.write('Please write any name');
    }

    else if (person != null) {
        document.write ("Hello " + person + "! How are you today?");
      }
  }

  myFunction();



  function squared() {
    var person = prompt("write a number");
    

    if (!isNaN(person)) {
        document.write("result: " + person*person);
    }

    else {
        document.write ('write a number');
      }
  }

  squared();



  
  function checkPass() {
    var password = prompt("write your password");
    

    if (password.length > 8 && password.includes("$") ) {
        document.write("valid");
    }

    else {
        document.write ('invalid');
      }
  }

 checkPass();



 let paragraph = 'The quick brown fox jumps over the lazy dog.' + 'if the dog barked, was it really lazzy?'
 let str= 'dog';

 let num = paragraph.indexOf(str)
 document.write(num)

