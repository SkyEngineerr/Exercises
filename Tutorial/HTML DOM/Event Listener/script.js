//document.querySelector('.clear-tasks')
//console.log(('clear-tasks'));
document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World');
  e.preventDefault();
  });
  //document.querySelector('.clear-tasks').addEventListener('click', onClick);
  document.querySelector('.clear-tasks').addEventListener('click', myFunc);
  function myFunc(e){
    //console.log('clicked!!!')
    let val;
    val = e;
    //Event target element
    val = e.target;
    val = e.target.id
    val = e.target.className
    val = e.target.classList
    e.target.className = "clear-tasks btn red"
    
   
    console.log(val)
  }


