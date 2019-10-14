// function checkCity (city, cities) {

//     for (let i = 0; i<cities.length; i++) {
        
//         if (cities[i] === city) {
//             return `You were in ${city}`
//         }
//         else {return `You did not visit ${city}`}
      
        
//     }
    
// }

// console.log(checkCity("istanbul", ["Ankara", "Hamburg", "istanbul", "Mardin"]));


function checkCity (city, cities) {

    let newArr = [];
    let matches = false;

    for (let i = 0; i<cities.length; i++) {
        matches = false;
        for (let x = 0; x<city.length; x++) {
            if (cities[i] === city [x])
            matches = true;
        }
        
        if(matches) 
            {newArr.push(cities[i])}
        
    }
    
    return newArr;
}


console.log(checkCity(["Kalana", "Ankara", "Hamburg"], ["Ankara", "Hamburg", "istanbul", "Mardin"]));