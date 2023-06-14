const letter = prompt("Enter a Letter to check vowels: ");

if (
  letter == "a" ||
  letter == "A" ||
  letter == "e" ||
  letter == "E" ||
  letter == "i" ||
  letter == "I" ||
  letter == "o" ||
  letter == "O" ||
  letter == "u" ||
  letter == "U"
) {
  console.log(`${letter} letter is a Vowel`);
} else {
  console.log(`Letter ${letter} isn't a Vowel`);
}
