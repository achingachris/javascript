// so what map() does , it creates a new array from another one after the items from the prevoius arrays are kind of modified

// example ; multiply all numbers in an array by 5
const num = [1,2,3,4,5,6,7,8,9]
let newNum = num.map(number => number * 5)
console.log(newNum)

// example calculate ages based on year of birth
const yob = ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000']
let age = yob.map(calculate => 2020 - calculate)
console.log(age)