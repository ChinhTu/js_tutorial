const codeValidate = (codeVal) => {
  const length = codeVal.length;
  const codeMsg = $("codeMsg");
  // Means that you must enter 1 or more number (not enter string and special symbol)
  const codeRegExp = /\d{1,}/;
  let isValidCode = true;

  if (!codeRegExp.test(codeVal)) {
    codeMsg.innerHTML = `<span class = 'text-danger'>Please enter num</span>`;
    isValidCode = false;
  }
  // ZIP code rule: 5 or 9 number digits
  else if (length !== 5 && length !== 9) {
    codeMsg.innerHTML = `<span class = 'text-danger'>ZIP code is invalid</span>`;
    isValidCode = false;
  } else {
    codeMsg.innerHTML = "";
  }
  return isValidCode;
};
