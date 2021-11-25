//  checkbox group with the param is checkboxes's names
const checkboxGroup = (checkboxesName) => {
  let checkedArr = [];
  let sportsMsg = $("sportsMsg");
  let isCheckboxValid = true;
  // Use for loop for all checkbox to find checked box
  checkboxesName.forEach((i) => {
    // Push all checked box in to (checkedArr) array, and if none checked box pushed into array => show the invalid message below
    checkedArr.push(i.checked);
    if (checkedArr.indexOf(true) === -1) {
      $(
        "sportsMsg"
      ).innerHTML = `<span class ='text-danger'>You should select at least one option.</span>`;
      isCheckboxValid = false;
    }
    // If have at least 1 checked box, don't show anything
    else {
      sportsMsg.innerHTML = "";
    }
  });
  return isCheckboxValid;
};
