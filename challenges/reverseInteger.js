// CHALLENGE REVERSE AN INTEGER

const reverseInteger = (int) => {
    // change the integer to a string (.toString).
    // seperate each character in the new string to make an array
    //then reverse the order 
    //then combine the seperated character
    let revInteger = int.toString().split('').reverse().join('');
    //using Math.sign(int) to make sure that negative numbers give results too
    return parseInt(revInteger) * Math.sign(int);;
}
console.log(reverseInteger(-99))

