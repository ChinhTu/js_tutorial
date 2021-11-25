// Name input validate
const fullNameValidate = (nameValue) => {
  // Name input with format "Abc xyz"
  let regExpName = /^[a-z]+(?:\s[a-z]+)+$/;
  let nameMsg = $("nameMsg");
  let isNameValid = true;
  // If you forgot enter name
  if (nameValue === "") {
    nameMsg.innerHTML =
      "<span class ='text-danger'>This field is required.</span>";
    isNameValid = false;
  }
  // If your name format is invalid
  else if (!regExpName.test(nameValue)) {
    nameMsg.innerHTML =
      "<span class ='text-danger'>Your full name is invalid.</span>";
    isNameValid = false;
  } else {
    nameMsg.innerHTML = "<span class ='text-success'>Good job!</span>";
  }
  return isNameValid;
};
