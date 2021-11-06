let math = prompt("Enter your Math mark in range 1 to 10");
let physical = prompt("Enter your Physical mark in range 1 to 10");
let chemistry = prompt("Enter your Chemistry mark in range 1 to 10");

mathPts = parseFloat(math);
physicalPts = parseFloat(physical);
chemistryPts = parseFloat(chemistry);  // Parsefloat la lenh chuyen kieu string ve kieu float
let avgMark = (mathPts + physicalPts + chemistryPts)/3;
finalMark = avgMark.toFixed(1);
if (finalMark >= 8.0) {
  alert(`Your average mark is: ${finalMark}. Your rank is: A`);
}
else if (finalMark >=6.5) {
  alert(`Your average mark is: ${finalMark}. Your rank is: B`);
}
else if (finalMark >=5.0) {
  alert(`Your average mark is: ${finalMark}. Your rank is: C`);
}
else {
  alert(`Your average mark is: ${finalMark}. Your rank is: D`);
}