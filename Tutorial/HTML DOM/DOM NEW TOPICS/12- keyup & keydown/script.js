let inpt = document.querySelector("#kinput")
let txtarea = document.querySelector("textarea")


inpt.addEventListener('keydown', listener)
inpt.addEventListener('keyup', listener)


function listener (e) {
    if(e.type == 'click') {
        inpt.preventDefault()
    }
    if (e.type == 'keydown') {
        txtarea.innerHTML = e.key
        console.log(e.target);
        
    }
    else if (e.type == 'keyup'){
        txtarea.innerHTML = e.key
    }
}

inpt.onkeydown = inpt.onkeyup = kinput.onkeypress = handle;
let lastTime = Date.now();

function handle (e) {
    console.log(form.elements);
}





console.log(inpt);
console.log(txtarea);