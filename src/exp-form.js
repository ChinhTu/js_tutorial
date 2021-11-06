// Get by id function
const $ = (value) => {
  return document.getElementById(value);
};

// Get by name function
const getName = (value) => {
  return document.getElementsByName(value);
};

// Get send button
const sendButton = $("sendBtn");

// Performance for age range
$("ageRange").addEventListener("change", () => {
  $("agePerform").value = $("ageRange").value;
});

// Send button function
sendButton.addEventListener("click", () => {
  // Name input validate
  let nameInput = $("nameInput");
  let nameValue = nameInput.value;
  let getSuccess = "<span class ='text-success'>Good job!</span>";
  let regExpName = /^[a-z]+(?:\s[a-z]+)+$/;
  let nameMsg = $("nameMsg");
  if (nameValue === "") {
    nameMsg.innerHTML =
      "<span class ='text-danger'>This field is required.</span>";
  } else if (!regExpName.test(nameValue)) {
    nameMsg.innerHTML =
      "<span class ='text-danger'>Your full name is invalid.</span>";
  } else {
    nameMsg.innerHTML = getSuccess;
  }

  // Email input validate
  let emailInput = $("emailInput");
  let emailValue = emailInput.value;
  let regExpEmail = /^[a-zA-Z]+@edu\.com\.vn$/;
  let wrongEmail = emailValue.indexOf("@");
  let emailMsg = $("emailMsg");
  if (emailValue === "") {
    $("emailMsg").innerHTML =
      "<span class ='text-danger'>This field is required.</span>";
  } else if (
    wrongEmail === -1 ||
    wrongEmail === 0 ||
    wrongEmail === emailValue[length - 1]
  ) {
    emailMsg.innerHTML =
      "<span class ='text-danger'>Your email is invalid. Please correct your email.</span>";
  } else if (!regExpEmail.test(emailValue)) {
    emailMsg.innerHTML =
      "<span class ='text-danger'>We only accept educational emails.</span>";
  } else {
    emailMsg.innerHTML = getSuccess;
  }

  // Age range validate
  let ageRange = $("ageRange");
  if (ageRange.value <= 30) {
    $(
      "ageMsg"
    ).innerHTML = `<span class = 'text-success'>You’re still young!</span>`;
  }

  // Favourite sports checkbox group
  let sportsCheckbox = getName("sport");
  let checkedArr = [];
  let sportsMsg = $("sportsMsg");
  sportsCheckbox.forEach((i) => {
    checkedArr.push(i.checked);
    if (checkedArr.indexOf(true) === -1) {
      $(
        "sportsMsg"
      ).innerHTML = `<span class ='text-danger'>You should select at least one option.</span>`;
    } else {
      sportsMsg.innerHTML = "";
    }
  });

  // Tell us your wish textarea
  let wishMsg = $("textareaMsg");
  if ($("wishTextarea").value === "") {
    wishMsg.innerHTML = `<span class="text-danger">This field is required</span>`;
  } else {
    wishMsg.innerHTML = "";
  }

  // Validate for all data

  if (
    nameMsg.innerHTML === getSuccess &&
    emailMsg.innerHTML === getSuccess &&
    sportsMsg.innerHTML === "" &&
    wishMsg.innerHTML === ""
  ) {
    alert("Sent data! We will contact you as soon as possible.");
  }
});

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
