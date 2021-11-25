/**
 * Validate email
 * @returns isEmailValid
 */
const emailValidate = (emailValue) => {
  // Regular experession for email
  const emailRegExp = /^\S+@\S+\.\S+$/;

  const emailMsg = $("emailMsg");
  let isEmailValid = true;

  if (!emailRegExp.test(emailValue)) {
    emailMsg.innerHTML = `<span class = 'text-danger'>Your email is invalid</span>`;
    isEmailValid = false;
  } else {
    emailMsg.innerHTML = "";
  }
  return isEmailValid;
};
