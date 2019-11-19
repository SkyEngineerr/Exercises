//document.getElementsByClassName
//const listItems = document.querySelector('ul').getElementsByClassName('collection-item')


//const items = document.getElementsByClassName('collection-item')
//console.log(items);
//items[0].style.color= 'red'
//items[2].textContent ='Hello'


//document.getElementsByTagName('li')

let lis =  document.getElementsByTagName('li')
let colors = ['brown','green','orange','red','blue']
let texts = ['brown','green','orange','red','blue']
for (let i =0; i<lis.length; i++) {
  
//   lis[i].textContent = `The color is ${texts[i]}`
//   lis[i].style.color = colors[i]

}

// console.log(lis);

//Convert HTML Collection into array


lis = Array.from(lis);

console.log(lis);

lis.reverse();

lis.forEach(function(item,index){
  item.innerHTML = `<span style='color:red;'>${index} : Hello</span> `
})






