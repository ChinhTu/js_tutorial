// Input number form
let num = prompt("Please input a number!");

if (num < 0) {
  alert("Please input a positive number!");
}

else if (num >= 0) {
  alert("Congratulations! You did it!");
}

else {
  alert("Please input a number!")
}


// Input email form
let email = prompt("Please input your email");

if (email.length > 8 || email.charAt(0) === '@' || email.indexOf('@') === -1) {
  alert("Your email is not valid")
}
else {
  alert("Congrats!")
}
