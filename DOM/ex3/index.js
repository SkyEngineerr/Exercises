let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,19,20]

let body1 = document.querySelector('body')
let ulList = document.createElement("ul");

arr.forEach(function(item){  
  if(item % 2 == 0){
    ulList.appendChild(document.createElement('li')).appendChild(document.createTextNode(item))
  }
})

body1.appendChild(ulList)



