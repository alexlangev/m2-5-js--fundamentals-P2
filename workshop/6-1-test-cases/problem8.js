// Problem 8
// ---------
// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
//
// You are NOT ALLOWED to use the `reverse` method.
// You must use a loop of some kind (for, while, forEach, map, etc)
//
// HINT (one possible approach):
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the
//    empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function reverse(str) {
  if (typeof str === "string") {
    if (str.length === 0) {
      return "";
    } else {
      let charArr = str.split("");
      let reversedCharArr = [];
      for (let i = 0; i <= charArr.length - 1; i++){
        reversedCharArr[charArr.length - 1 - i] = charArr[i];
      }
      return reversedCharArr.join("");
    }
  } else {
    return undefined;
  }
}
// We need 5 test cases
// expect(reverse());
expect(reverse("Hello"), "olleH" );
expect(reverse("123"), "321" );
expect(reverse(""), "" );
expect(reverse(["Hello"]), undefined );
expect(reverse(true), undefined );
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
