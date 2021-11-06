let myNumber = prompt("Please input a number >=3");

if (myNumber < 3) {
  alert("Please retry again!");
}

else {
  for (let i = 0; i < myNumber; i++) {
    for (let j = 0; j <= myNumber; j++) {
      if (j < myNumber - i) {
        document.write("&nbsp;&nbsp;");
      }
      else {
        document.write("*");
      }
    }
    document.write("<br/>");
  }
}