let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let medArit = 0

for (let index = 0; index < numbers.length; index += 1){
    medArit += numbers[index]/numbers.length
     console.log(medArit) 
     if (numbers[index] < 20) {
      console.log ("O valor é menor que 20");
      } else {
      console.log ("O valor é maior que 20")
   }
   }