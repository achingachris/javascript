// Filter Items in Arrays
const students = [
  { name: "Irene", yearStarted: 2015, yearCompleted: 2019 },
  { name: "Jamila", yearStarted: 2019, yearCompleted: 2020 },
  { name: "Swabra", yearStarted: 2018, yearCompleted: 2022 },
  { name: "Ali", yearStarted: 2000, yearCompleted: 2007 },
  { name: "Chris", yearStarted: 2001, yearCompleted: 2006 },
  { name: "Ken", yearStarted: 2020, yearCompleted: 2024 },
  { name: "Shantel", yearStarted: 2015, yearCompleted: 2021 },
  { name: "Martin", yearStarted: 2018, yearCompleted: 2020 },
  { name: "Salma", yearStarted: 2015, yearCompleted: 2019 },
];

// Array.prototype.filter()
// 1. Filter the list of students who started in 2015
const filterdStudents = students.filter(
  (student) => student.yearStarted >= 2015 && student.yearStarted < 2016
);

console.table(filterdStudents);
