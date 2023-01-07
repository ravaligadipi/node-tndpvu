let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let name = testCase1
  .sort((a, b) => (a.biology + a.chemistry < b.biology + b.chemistry ? 1 : -1))
  .map((obj) => obj.name);
console.log(name);

let name1 = testCase1
  .sort((a, b) => (a.biology + a.chemistry < b.biology + b.chemistry ? 1 : -1))
  .map((obj) => obj.name);
console.log(name1);

