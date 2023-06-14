var name = prompt('Enter your Name: ');

const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVowels = (str) => {
  var count = 0;
    for (let letter of str.toLowerCase() ) {
      if (vowels.includes(letter)) {
        count++;
      }
    }
    return count;
}

console.log(countVowels(name));