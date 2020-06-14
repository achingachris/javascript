// filter() creates a new array from an existing array with all elements that have passed a test/condition given.

// syntax for .filte()
// let newArray = oldArray.filter()

// example 1
const countries = ['kenya', 'uganda', 'tanzania', 'somalia', 'burundi', 'rwanda', 'egypt']
let newCountries = countries.filter(country => country.length > 6)
console.log(newCountries) // will create a new array of countries whose name have a length of 7 chracters and above

// example 2, show numbers of values less than 10
const values = [1,2,3,4,5,6,77,8,323,2,42,342,13,4,5,556,532,43,5,57,11,22,44,55,66,77,8,0]
function isLow(value) {
    return value <= 10
}
let small = values.filter(isLow);
console.log(small)

// example 3,searching values in an array
const country = ['kenya', 'uganda', 'tanzania', 'somalia', 'burundi', 'rwanda', 'egypt', 'japan', 'eritrea', 'mozambique']
// function filterArray(arr, query) {
//     return arr.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
// }
const filterArray = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
console.log(filterArray(country, 'tan'))