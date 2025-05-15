//console.log will output a message in the developer console
//two slashes starts a single line comment
console.log("it worked"); //single line comments can go beside code

/*
this is a multi-line comment
starts with a / and a * and closes with a * and a /
*/

// to declare a variable, use let or const
const ourClassNum="J207";
let numStudents = 9; // with a number,you don't neeed quotes

console.log(ourClassNum);

//if you declare a variable with let, you can change its value
numStudents = 21;

console.log(numStudents); // make sure you include your console.log after you change your variable since your code running from top to bottom

//if you declare a value with const, you can't change its value
//ourClassNum = "C128";
// (trying to change a const variable will give you an error, and stop the code)

console.log(ourClassNum);

// const and let cannot be redeclared (or recreated)
//let numstudents = 25; (this will also give you an error)
//so we cannot use same variable name more than one 
