// Capitalize each word in a string

//using regEX
const capital0 = (str) => {
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
};
console.log(capital0("my name is chris"));

//uing map
//first come all characters lower case
//make an array from the string's characters
//use map to go through each sub string/word and changing the first character to upper case
const capital1 = (str1) => {
  const output = str1
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
  return output;
};
console.log(capital1("jamila suleiman"));
