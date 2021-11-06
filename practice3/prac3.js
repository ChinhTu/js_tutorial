let hello = "Hello world! I'm a newbie in programming.";

// Output the string length
const output1 = hello.length;
console.log(output1);

//Count how many words appeared in the string above
let totalWord = hello.split(' ');
console.log(totalWord);

// Find location of newbie
const locate1 = hello.indexOf('newbie');
console.log(locate1);

// Cut a part of the string above to have the word “newbie”
let newbie = hello.slice(19, 25);
console.log(newbie);

// Replace word “programming” in the string above by the uppercase one
let program = hello.replace('programming', 'PROGRAMMING');
console.log(program);

//
