let city1 = {
  name:'hamburg',
  population:120,
}
let city2 = {
  name:'izmir',
  population:7,
}
let city3 = {
  name:'istanbul',
  population:11,
}

function tripAdvisor (arrayOfCities) {
  let lowestNumber = arrayOfCities[0].population;

  let min = arrayOfCities.forEach(function (keyValue, index, arrayOfCities) {
    if(index > 0) {
      if(keyValue.population < lowestNumber){
        lowestNumber = keyValue.population;
        arrayOfCities[index].advice = 'positive';
        console.log( arrayOfCities[index])
      }
    }
  });
}

tripAdvisor([city1, city2, city3]);