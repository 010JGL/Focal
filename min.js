// find the lowest numbers in an array, return that value

// TODO: - Make a loop
// - compares values to find the lowest one
// - return that lowest value

const min = function(numbers) {                 // make a function to re use
  let lowestNumber = numbers[0];            // create a var to compare later, doesnt work if we put value at 0, so we start a first line of data
  for (let i = 0; i < numbers.length; i++) {   // loop to go thru the values
    if (numbers[i] < lowestNumber) {          // compares first value with the value index
      lowestNumber = numbers[i];              // if value is lower, change the var value
    }
  }
  return lowestNumber;                        // return the value out of the function
};

/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs $${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);