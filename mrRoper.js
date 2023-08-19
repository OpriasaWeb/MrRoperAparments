
var apartment = 20
var units = 15
var months = 12
var rent = 0
var apartmentCount = 0;
for(let i = 1; i <= apartment; i++){
  console.log("Apartment: " + i);
  apartmentCount = apartmentCount + 1;
  for(let j = 1; j <= units; j++){
    console.log("Units: " + j);
    for(let k = 1; k <= months; k++){
      rent = rent + 800;
      console.log("For month " + k + " 800");
    }
    console.log("Total price " + rent + " amount for this unit " + j + " under building " + apartmentCount);
  }
}