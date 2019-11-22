let header = document.querySelector('h1.title')
header.style.textAlign='center'
//console.log(header);

let labels = document.getElementsByClassName('category')
labels[0].style.color ='red'
labels[0].style.fontStyle ='italic'
labels[1].style.color ='blue'
labels[1].style.fontStyle ='italic'
labels[2].style.color ='brown'
labels[2].style.fontStyle ='italic'
//console.log(labels[0]);

function colorGenerator () {
    let myArray = ['#7973C3', '#96A9D5','#613764','#CEE9ED', '#96A9D5', '#6D457D']
    let rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand
}
colorGenerator ()

let unordered = document.querySelectorAll('ul.food-category')
unordered[0].style.backgroundColor = colorGenerator ()
unordered[1].style.backgroundColor = colorGenerator ()
unordered[2].style.backgroundColor = colorGenerator ()
//console.log(unordered);

/////
/////


let warning = document.querySelector('h3#warning')
warning.style.fontSize = "x-large";
warning.style.font = "italic bold 20px arial,serif";
//console.log(warning);

let allergy = document.querySelectorAll('li.allergy-info:nth-child(even)')
allergy = Array.from(allergy)
allergy.forEach(function(item){
    item.style.backgroundColor = 'red'
})

let warn = document.getElementsByClassName('allergy-warning')
warn[0].style.textAlign='center'
//console.log(warn[0].style);

//FOOTER
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const description = document.querySelectorAll(".food-desc");
description.forEach(footerDesc => {
    let desc = footerDesc.style;
    desc.border = "5px solid orange";
    desc.borderRadius = "100%";
    desc.height = "7rem";
    desc.width = "7rem";
    desc.display = "flex";
    desc.justifyContent = "center";
    desc.alignItems = "center";
    desc.margin = "1rem";
})






