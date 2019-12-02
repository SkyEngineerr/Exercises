// get the element

let firstDiv = document.getElementById("fDiv")

//make its background color = red

// firstDiv.style.backgroundColor = 'red'
// firstDiv.style.color = 'white'


//Also there is a global variable named by id that rreferences the element:

//sDiv is a reference to DOM-element with id = 'sDiv'

// sDiv.style.backgroundColor = 'yellow'
// sDiv.style.color= 'red'

//That's unless we declare a Javascript variable with the same name, than it takes precendence

//let sDiv = 5; //Now sDiv is 5, not a reference to <div id='sDiv'>

//console.log(sDiv);

//////////////////////////////////////////////////

let header = document.getElementById('header')
header.style.backgroundColor = "yellow"

let row1 = document.getElementById('row1')
row1.style.backgroundColor = "yellowgreen"

let row2 = document.getElementById('row2')
row2.style.backgroundColor = "orange"



document.getElementById('spec').style.backgroundColor = "purple"


let body = document.querySelector('body');
let table = document.createElement('table');
body.appendChild(table)
let first = table.childNodes[1]

for (let i = 0; i<3; i++) {
  let tr = document.createElement('tr');
  table.appendChild(tr)

  let th = document.createElement('th')
  th.appendChild(document.createTextNode('HEADER'))
  table.firstChild.appendChild(th);
}


for (let j = 0; j < 3; j++) {
  let td = document.createElement('td')
  td.appendChild(document.createTextNode('name'))
  table.childNodes[1].appendChild(td)
  table.childNodes[2].appendChild(td)
}











