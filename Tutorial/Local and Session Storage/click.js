//set local storage item
//the key and value should be string
localStorage.setItem('name', 'Eren')
localStorage.setItem('name', 'Seyma')
localStorage.setItem('age', '30')


//set session storage item
sessionStorage.setItem('name', 'mr.smith')

//remove from local storage

//localStorage.removeItem('name')

//get property from local storage
const x = localStorage.getItem('name')
const y = localStorage.getItem('age')


//clear local storage
localStorage.clear()
console.log(x,y);