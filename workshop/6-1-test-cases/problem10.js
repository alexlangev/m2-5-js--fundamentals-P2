// Problem 10
// ----------
// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

function makeIntoTitle(sentence) {
  if (typeof sentence !== "string") {
    return undefined;
  } else {
    let wordArray = sentence.split(" ");
    let capWordArray = [];
    
    for (let i = 0; i <= wordArray.length - 1; i++){
      let word = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1).toLowerCase();
      capWordArray.push(word);
    }
    return capWordArray.join(" ");
  }
}

// Add 6 total (5 more)
expect(makeIntoTitle('the longest road is a great song'), 'The Longest Road Is A Great Song');
expect(makeIntoTitle("I LIKE SANDWICHES"), "I Like Sandwiches");
expect(makeIntoTitle(""), "");
expect(makeIntoTitle("!@#$"), "!@#$");
expect(makeIntoTitle(35), undefined);
expect(makeIntoTitle(true), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
