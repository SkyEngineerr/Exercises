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