/* 

A word, verse, or sentence (such as "madam") or number (uch as 1881) the reads the same from backward & forward

*/

const string = prompt("Enter value: ");
string = string.toLocaleLowerCase();

const palindromeFind = (str) => {
  //reverse string
  var reverseString = str.split('').reverse().join('');
  if (reverseString === str) {
    return true
  } else {
    return false
  }
}

console.log(palindromeFind(string));