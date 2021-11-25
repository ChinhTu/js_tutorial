// Validate for radio group with param is radio group's names
const findRadioChecked = (radioGroupNames) => {
  // Use loop for names, and find the checked radio
  radioGroupNames.forEach((chosenRadio) => {
    if (chosenRadio.checked) {
      $(
        "radioMsg"
      ).innerHTML = `<span class='text-success'>You have chosen ${chosenRadio.value}</span>`;
    }
  });
};
