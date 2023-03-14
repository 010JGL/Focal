// Title case (or Capital Case) is a specific method of capitalizing the characters of every word in a sentence
//   in order to make it usable as a title or headline.


const titleCase = function(sentence) {
  
  let newArrayOfWords = [];           // to push data in
  let list = sentence.split(" ");      // split the sentence into an array of words
  
  if (sentence.length === 0) {        // guarding the rest of the code
    return "";
  }

  for (let word of list) {                // first loop to get the words
    
    const letters = word.split('');         // split my word into an array of words
    letters[0] = letters[0].toUpperCase();  // makes the first letter capitalized
    
    for (let i = 1; i < letters.length; i++) {   // another loop for letters, starting at 1 to the end
      letters[i] = letters[i].toLowerCase();     // makes the second letters of every word ++ lowercase
    }
    newArrayOfWords.push(letters.join(''));      // push the values into the new array
  }
  return newArrayOfWords.join(' ');             // returns the new array, joined with a space for words
};

module.exports = titleCase;