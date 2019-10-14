function checkCity (city, cities) {
    let x = "";

    for (let i = 0; i<cities.length; i++) {
        
        if (cities[i] === city) {
            x =  `You were in ${city}`
            return x;
            break;
            
        }
        else {x = `You did not visit ${city}`}
        return x;
        
    }
    
    
}



console.log(checkCity("istanbul", ["Ankara", "Hamburg", "istanbul", "Mardin"]));
