
function check(city, pop){

for (let i = 0; i<cities.name.length; i++){
    if (cities.name[i] == city) {
      for (let j = 0; j<cities.population.length; j++){
        if (cities.population < pop){
          console.log('yes')
        }
      }
    }
}

}

let cities= {
  name:['paris','istanbul'],
  population:['120', '120000'],
  continant:['Europe', 'Asia']
}

check('paris', 12);

function checkCity (obj, city, pop) {
  for (key in obj) {
    console.log(key)
  }
}

checkCity();