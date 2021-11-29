const $ = (value) => {
  return document.getElementById(value);
};

/**
 * Validate email
 * @returns emailValid
 */
const emailValidate = () => {
  const inputEmail = $("inputEmail");
  const emailVal = inputEmail.value;
  const emailRegExp = /^\S+@\S+\.\S+$/;
  const emailMsg = $("emailMsg");
  let isEmailValid = true;
  if (!emailRegExp.test(emailVal)) {
    emailMsg.innerHTML = `<span class = 'text-danger'>Your email is invalid</span>`;
    isEmailValid = false;
  } else {
    emailMsg.innerHTML = "";
  }
  return isEmailValid;
};

/**
 * Validate for verify password function
 * @returns isValidPass
 */
const verifyPass = () => {
  const inputPassword = $("inputPassword");
  const passVal = inputPassword.value;
  const inputVerifyPassword = $("inputVerifyPassword");
  const verifyPassVal = inputVerifyPassword.value;
  const passwordMsg = $("passwordMsg");
  let isValidPass = true;

  if (verifyPassVal !== passVal) {
    passwordMsg.innerHTML = `<span class = 'text-danger'>Password do not match</span>`;
    isValidPass = false;
  } else {
    passwordMsg.innerHTML = "";
  }
  return isValidPass;
};

/**
 * Validate for ZIP code function
 * @returns isValidZIPCode
 */
const codeValidate = () => {
  const inputCode = $("inputCode");
  const codeValue = inputCode.value;
  const length = codeValue.length;
  const codeMsg = $("codeMsg");
  const codeRegExp = /\d{1,}/;
  let isValidCode = true;

  if (!codeRegExp.test(codeValue)) {
    codeMsg.innerHTML = `<span class = 'text-danger'>Please enter num</span>`;
    isValidCode = false;
  } else if (length !== 5 && length !== 9) {
    codeMsg.innerHTML = `<span class = 'text-danger'>ZIP code is invalid</span>`;
    isValidCode = false;
  } else {
    codeMsg.innerHTML = "";
  }
  return isValidCode;
};

/**
 * Validate for card number function
 * @returns isValidCardNumber
 */
const cardNumberValidate = () => {
  const inputCardNum = $("inputCardNumber");
  const cardNumberVal = inputCardNum.value;
  const cardRegExp = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
  let isValidCardNumber = true;
  if (!cardRegExp.test(cardNumberVal)) {
    $(
      "cardNumberMsg"
    ).innerHTML = `<span class = 'text-danger'>Card number is invalid</span>`;
    isValidCardNumber = false;
  } else {
    $("cardNumberMsg").innerHTML = "";
  }
  return isValidCardNumber;
};

const registerBtn = $("registerBtn");
registerBtn.addEventListener("click", () => {
  const validEmail = emailValidate();
  const validPassword = verifyPass();
  const validCode = codeValidate();
  const validCardNumber = cardNumberValidate();
  if (validEmail && validPassword && validCode && validCardNumber) {
    alert("Success!");
  }
});

const resetBtn = $("resetBtn");
resetBtn.addEventListener("click", () => {
  $("regForm").reset();
  $("emailMsg").innerHTML = "";
  $("passwordMsg").innerHTML = "";
  $("codeMsg").innerHTML = "";
  $("cardNumberMsg").innerHTML = "";
});
