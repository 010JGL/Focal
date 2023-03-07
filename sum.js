const args = process.argv;

const newArgs = args.slice(2);

let num = "0";

num = Number(newArgs[0]) + Number(newArgs[1]); // Changes the string to a number

console.log(num);




 