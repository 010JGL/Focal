const input = process.argv[2];     // put an input with the node cmd

if (input) {                        // if there is a num cmd, console.log the func
  console.log(reverse(input));
}
function reverse(original) {        // function to reverse the letters
  return original.split('').reverse().join('');
}
