// Reset button

const resetBtn = $("resetBtn");

resetBtn.addEventListener("click", () => {
  $("validateForm").reset();
  $("nameMsg").innerHTML = "";
  $("emailMsg").innerHTML = "";
  $("ageMsg").innerHTML = "";
  $("sportsMsg").innerHTML = "";
  $("textareaMsg").innerHTML = "";
});
