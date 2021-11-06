// Get id function
const $ = (value) => {
  return document.getElementById(value);
};

// Get name function
const getName = (value) => {
  return document.getElementsByName(value);
};

const submitButton = $("submitBtn");

submitButton.setAttribute("disabled", "");

// Define function for submit button
function myFunction() {
  // Validate for name input
  let nameInput = $("nameInput");
  if (nameInput.value.length > 8 || nameInput.value === "") {
    $("fnameMsg").innerHTML =
      "<span class ='text-danger'>Your name is invalid!</span>";
  } else {
    $("fnameMsg").innerHTML = "<span class ='text-success'>Good job!!</span>";
  }

  // Validate for phone
  let phoneInput = $("phoneInput").value;
  const regExpPhone = /^([0-9]{4})-([0-9]{3})-([0-9]{3})$/;
  if (!regExpPhone.test(phoneInput)) {
    $("phoneMsg").innerHTML =
      "<span class ='text-danger'>Your phone number is invalid!</span>";
  } else {
    $("phoneMsg").innerHTML = "<span class ='text-success'>Good job!!</span>";
  }

  // Validate for email
  let emailInput = $("emailInput");
  const emailValue = emailInput.value;
  if (
    emailValue.indexOf("@") === -1 ||
    emailValue.charAt(0) === "@" ||
    emailValue.charAt(length - 1) === "@"
  ) {
    $("emailMsg").innerHTML =
      "<span class='text-danger'>Your email is invalid!</span>";
  } else {
    $("emailMsg").innerHTML = "<span class='text-success'>Good job!</span>";
  }

  // Validate for city
  let citySelect = $("citySelect");
  const cityValue = citySelect.value;

  if (cityValue === "0") {
    $("cityMsg").innerHTML =
      "<span class='text-danger'>You must choose your city!</span>";
  } else if (cityValue === "1") {
    $("cityMsg").innerHTML =
      "<span class='text-success'>You have chosen Da Nang city!</span>";
  } else if (cityValue === "2") {
    $("cityMsg").innerHTML =
      "<span class='text-success'>You have chosen Ha Noi city!</span>";
  } else {
    $("cityMsg").innerHTML =
      "<span class='text-success'>You have chosen Ho Chi Minh city!</span>";
  }

  // Validate for radio group
  let contactRadioGroup = getName("contactRadioGroup");
  contactRadioGroup.forEach((chosenRadio) => {
    if (chosenRadio.checked) {
      $(
        "radioMsg"
      ).innerHTML = `<span class='text-success'>You have chosen contact by ${chosenRadio.value}</span>`;
    }
  });
}

// Validate for checkbox
let flexCheckDefault = $("flexCheckDefault");

flexCheckDefault.addEventListener("click", () => {
  if (flexCheckDefault.checked) {
    submitButton.removeAttribute("disabled");
  }

  if (!flexCheckDefault.checked) {
    submitButton.setAttribute("disabled", "");
  }
});

// Validate for reset
const resetBtn = $("resetBtn");
resetBtn.addEventListener("click", () => {
  $("registrationForm").reset();
  $("fnameMsg").innerHTML = "";
  $("phoneMsg").innerHTML = "";
  $("emailMsg").innerHTML = "";
  $("cityMsg").innerHTML = "";
  $("radioMsg").innerHTML = "";
});
