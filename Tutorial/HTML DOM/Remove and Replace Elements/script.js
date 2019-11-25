//REPLACE ELEMENT
//Create Element

const newHeading = document.createElement("h2");;

//Add id
newHeading.id = "task-title";

//New text node
newHeading.appendChild(document.createTextNode("Easy Busy"))

//Get the old heading
const oldHeading = document.getElementById('task-title')

//Parent
const cardAction = document.querySelector(".card-action")  //Same down
const parentElement = oldHeading.parentElement // Same above

//Replace
cardAction.replaceChild(newHeading, oldHeading)

//Replace textnode
const li =document.querySelector('li')



///EXERCISE REPLACE TEXT INNER LI LIST///
// const firstText = document.querySelector('li').childNodes[0]

// const li = document.querySelector('.collection-item')

// let text = document.createTextNode('CHANGED ')

// li.replaceChild(text, firstText)
/////////////////////////////////////////

