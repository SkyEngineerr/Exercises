let val;
const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
console.log(val);
val = listItem
console.log(val);

//Get Child -Nodes-
val = list.childNodes
let val2 = Array.from(val)
// val = list.childNodes[0]
// val = list.childNodes[0].nodeName
//val = list.childNodes[0].nodeType
console.log(val)


  val2.forEach(function(item){
    console.log(item);
    if(item.innerText == 'hello'){
      console.log('hahahah');
    }
  })



// 1=Element
// 2=Attribute
// 3=Text node
// 8=Comment
// 9=Document itself
// 10=Doctype
