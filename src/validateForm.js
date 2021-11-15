// Set attribute
$("ageInput").setAttribute("value", "18");
$("male").setAttribute("checked", "");

// Name input validate
const nameInputValidate = (inputVal, msgVal) => {
  let isNameValid = true;

  if (inputVal.length > 50) {
    msgVal.innerHTML = `<span class = "text-danger">Your name is too long!</span>`;
    isNameValid = false;
  } else if (inputVal === "") {
    msgVal.innerHTML = `<span class = "text-danger">This text is required.</span>`;
    isNameValid = false;
  } else {
    msgVal.innerHTML = `<span class = "text-success">Good job!</span>`;
  }
  return isNameValid;
};

// Email input validate function
const emailInputValidate = (inputVal, msgVal) => {
  const regExpEmail = /^[a-z]{0,9}\@[a-z]{0,9}\.com$/;
  let isValidEmail = true;

  if (!regExpEmail.test(inputVal)) {
    msgVal.innerHTML = `<span class = 'text-danger'>Your email is invalid!</span>`;
    isValidEmail = false;
  } else {
    msgVal.innerHTML = `<span class = 'text-success'>Good job!</span>`;
  }
  return isValidEmail;
};

// Height validate
const heightValidate = (inputVal, msgVal) => {
  const regExpHeight = /^[\d]{0,1}\.[\d]{0,2}$/;
  let isValidHeight = true;

  if (!regExpHeight.test(inputVal)) {
    msgVal.innerHTML = `<span class = 'text-danger'>Your height is invalid!</span>`;
    isValidHeight = false;
  } else {
    msgVal.innerHTML = `<span class = 'text-success'>Good job!</span>`;
  }
  return isValidHeight;
};

// Weight validate
const weightValidate = (inputVal, msgVal) => {
  const regExpWeight = /^[\d]{0,2}\.[\d]{1}$/;
  let isValidWeight = true;

  if (!regExpWeight.test(inputVal)) {
    msgVal.innerHTML = `<span class = 'text-danger'>Your weight is invalid!</span>`;
    isValidWeight = false;
  } else {
    msgVal.innerHTML = `<span class = 'text-success'>Good job!</span>`;
  }
  return isValidWeight;
};

// Listen event from add button
const addFunction = () => {
  // Set variables
  // Full name variables
  const fullNameInput = $("fullNameInput");
  const fullNameValue = fullNameInput.value;
  const nameMsg = $("nameMsg");

  // Age variables
  const ageInput = $("ageInput");
  const ageValue = ageInput.value;

  // Email variables
  const emailInput = $("emailInput");
  const emailValue = emailInput.value;
  const emailMsg = $("emailMsg");

  // Height variables
  const heightInput = $("heightInput");
  const heightValue = heightInput.value;
  const heightMsg = $("heightMsg");

  // Weight variables
  const weightInput = $("weightInput");
  const weightValue = weightInput.value;
  const weightMsg = $("weightMsg");

  // Get data from form
  const validName = nameInputValidate(fullNameValue, nameMsg);
  const validEmail = emailInputValidate(emailValue, emailMsg);
  const validHeight = heightValidate(heightValue, heightMsg);
  const validWeight = weightValidate(weightValue, weightMsg);

  console.log(fullNameValue);

  // get value for gender
  const genderParam = getName("gender");
  let genderVal = "";
  genderParam.forEach((ele) => {
    if (ele.checked) {
      genderVal = ele.value;
    }
    return genderVal;
  });

  // Validate for all data
  if (validName && validEmail && validHeight && validWeight) {
    const newData = new Person(
      fullNameValue,
      ageValue,
      emailValue,
      genderVal,
      heightValue,
      weightValue
    );

    // Push data to dataArray
    dataArray.push(newData);

    const newArr = dataArray.map((obj) => {
      obj.BMI = obj.calculateBMI().toFixed(1);
      obj.healthStt = obj.guessHealth();

      return obj;
    });

    // Remove old data
    $("userTable").remove();

    // New table
    const newTable = createTable(newArr);

    $("data").append(newTable);
  }
};
