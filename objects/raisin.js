//Write a function whether a chocolate chip cookie
//also has raisins in it.
//Function - raisinAlarm
//will receive - Array of chocolate chips
//if - there is a chance that there might be a pesky raisin
//in the array as well
//return - "Raisin alert!"
// no raisin present - "All good"

const raisinAlarm = function(cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

//Test Code
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  let array = [];                                    // Make an empty array, to push data in AND return it
  for (let i = 0; i < cookies.length; i++) {        // Loop thru the first array [[1, 2], [3, 4], [5, 6]]   [i]
    for (let j = 0; j < cookies[i].length; j++) {   // loop thru the second arrays [1, 2] [3, 4]  [5, 6]    [j]
    
      if (cookies[i][j] === "🍇") {                 // if the position in our array[i] of arrays[j], is = to raisin
        array.push("Raisin alert!");                // push the data inside of our empty array
        break;                                      // break so after it find a raisin, gets out of the loop
      }
    }
  }
  array.push("All Good!");                           // if we dont find inside of the 2 loops, push all good. otherwise it will print everytime its not a raisin
  return array;                                     // returning the value out of the function
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);