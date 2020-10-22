// CHALLENGE REVERSE A STRING
// Return a string in reverse
// e.g. reverseString('hello') === 'olleh'


// SOLUTION 
  // convert string into an array of characters, reverse array then convert to string
  // For this solution, we will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("I love Jamila"));


// SOLUTION #2
// For this solution, we will use two methods: the String.prototype.substr() method and the String.prototype.charAt() method.
// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters
const reverseString1 = (str) => {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
console.log(reverseString1('hello'));
