const input = process.argv[2];     // put an input with the node cmd

if (input) {                        // if there is a num cmd, console.log the func
  console.log(reverse(input));
}
const reverse = function(original) {        // function to reverse the letters
  return original.split('').reverse().join('');  // split the data, reverse it and join it back together
};
