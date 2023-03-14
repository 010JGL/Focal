let originalWords = process.argv.slice(2);     // access the data from terminal node
let pigLatinWords = [];                         // empty array to push data in

for (let i = 0; i < originalWords.length; i++) {   // loop thru all of the array
  
  pigLatinWords.push(translateToPigLatin(originalWords[i]));     // push the data from the func. (func the array[index])
}

const translateToPigLatin = function(word) {
  
  return word.slice(1, word.length) + word[0] + "ay";  // returns the word , with conditions
};
console.log(pigLatinWords.join(' '));