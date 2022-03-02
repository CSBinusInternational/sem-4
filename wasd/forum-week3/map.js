
//pet cat clinic info details
const catClinic = [
    {
      'petName'     : 'Cherry',
      'petOwner'    : 'Ardelia',
      'petAge'      : 2
    },
    {
      'petName'     : 'Luna',
      'petOwner'    : 'Lula',
      'petAge'      : 7
    },
  ];

// map 
  const details = catClinic.map(function (pet, index, array) {
    return pet.petName; 
});
 
console.log(details)
// return ["Cherry, Luna"]

//filter

const kitten = catClinic.filter((pet) => pet.petAge < 4 );
console.log(kitten) // to filter the data with cat age less than 4 years old

const adult = catClinic.filter((pet) => pet.petAge > 5 );
console.log(adult) //to filter the data with cat age older than 5 years old

//reduce

const num = [3,4,5,1];

function summation(a, currentValue) {
  return a + currentValue;
}

let sum = num.reduce(summation);
console.log(sum);
