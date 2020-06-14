// sort() will return items that are sorted, default sorting order is ascending

// example 1, deafult sort
const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
weekDays.sort()
console.log(weekDays)

// sort people by age and name
const people = [
    {name: 'Jamila', age: 21},
    {name: 'Chris', age: 21},
    {name: 'Swabra', age: 24},
    {name: 'Dash',  age: 26},
    {name: 'Ken', age: 13},
    {name: 'Shantel', age: 8},
    {name: 'Timothy', age: 20},
    {name: 'Zaki', age: 17},
    {name: 'Elon', age: 42}
]
// age
let peopleAge = people.sort(function age(a, b) {
    return a.age - b.age
})
console.table(peopleAge)
// name
let peopleName = people.sort(function nameSort(a, b) {
    var name_1 = a.name.toUpperCase(); // switch to upper case
    var name_2 = b.name.toUpperCase() // switch to upper case
    if (name_1 < name_2) {
        return -1;
    }
    if (name_1 > name_2) {
        return 1;
    }

    return 0;
});
console.log(peopleName)