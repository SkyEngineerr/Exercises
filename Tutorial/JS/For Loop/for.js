let food = ['Pizza', 'Kebab', 'Doner']
for (let counter = 0; counter < food.length; counter++){
    console.log(food[counter])
    document.write(food[counter]+'<br>')
}

//////////////////////////////////

let colors = ['Yellow', 'Black', 'White' ,'Red']
let item = "#cc00ee"
colors.push(item)
document.write('<hr>')
for(i=0; i < colors.length; i++) {
    document.write(colors[i] + '<br>')
}
