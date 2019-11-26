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

//Remove Element
// const lis = document.querySelectorAll('li');
// const list = document.querySelectorAll("ul")
// lis[0].remove();

// const li2 = list.children[0]
// list.removeChild(li2)
// console.log(lis);


//ATTRIBUTES
val = link.getAttribute('href')
  link.setAttribute('href', 'http://google.com')
  val = link
console.log(val);

///EXERCISE REPLACE TEXT INNER LI LIST///
// const firstText = document.querySelector('li').childNodes[0]

// const li = document.querySelector('.collection-item')

// let text = document.createTextNode('CHANGED ')

// li.replaceChild(text, firstText)
/////////////////////////////////////////


///EXERCISE 2//////////////////////
let texts = document.querySelectorAll('li')

texts.forEach(function(item){
   console.log(item.firstChild);
    if(item.innerText == "DONE") {
      item.remove()
    }
})

