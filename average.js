const average = function(list) {          // input: list of numbers, in an array
  let sum = 0;                    // declare var to store data

  for (let num of list) {         // for of loop to get the list
    sum += num;                   // adds the numbers together in a variable
  }

  return sum / list.length;       // return the sum var / the list length to get the average
};
console.log(average([3, 5, 7]));
