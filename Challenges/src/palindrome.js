// CHALLVALIDATE A PALINDROME
// a palindrome is a word or strings that can be spelled in a similar manner backwards and forward.

const palindromeValidate = (word) => {
    let reverseWord = word.split('').reduce((acc, char) => char + acc, '');
    return reverseWord === word ? `${word} is a palindrome`: `${word} is not a palindrome`;
}
console.log(palindromeValidate("dad"));

