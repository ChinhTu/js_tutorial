// Validate for phone
const phoneValidate = (phoneValue) => {
  const regExpPhone = /^([0-9]{4})-([0-9]{3})-([0-9]{3})$/;
  let isPhoneValid = true;
  if (!regExpPhone.test(phoneValue)) {
    $("phoneMsg").innerHTML =
      "<span class ='text-danger'>Your phone number is invalid!</span>";
    isPhoneValid = false;
  } else {
    $("phoneMsg").innerHTML = "<span class ='text-success'>Good job!!</span>";
  }
  return isPhoneValid;
};
