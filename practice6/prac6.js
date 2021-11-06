let inputNum = prompt("Please enter a number >= 3!");
let exactNum = parseInt(inputNum);
if (exactNum < 3) {
  alert("Please retry again!");
}

else {
  let star = "";
  for(let i = 1; i <= exactNum; i++) {
    star = star.concat("*");
    document.write(star + "<br />");
}
  }
