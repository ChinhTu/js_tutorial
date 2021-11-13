// Set attribute
$("ageInput").setAttribute("value", "18");
$("male").setAttribute("checked", "");

// Name input validate
const nameInputValidate = () => {
  const fullNameInput = $("fullNameInput");
  const nameMsg = $("nameMsg");
  let isNameValid = true;

  if (fullNameInput.value.length > 50) {
    nameMsg.innerHTML = `<span class = "text-danger">Your name is too long!</span>`;
    isNameValid = false;
  } else if (fullNameInput.value === "") {
    nameMsg.innerHTML = `<span class = "text-danger">This text is required.</span>`;
  } else {
    nameMsg.innerHTML = `<span class = "text-success">Good job!</span>`;
  }
  return isNameValid;
};

// Email input validate function
const emailInputValidate = () => {
  const emailInput = $("emailInput");
  const emailValue = emailInput.value;
  const regExpEmail = /^[a-z]{0,9}\@[a-z]{0,9}\.com$/;
  let isValidEmail = true;

  if (!regExpEmail.test(emailValue)) {
    $(
      "emailMsg"
    ).innerHTML = `<span class = 'text-danger'>Your email is invalid!</span>`;
    isValidEmail = false;
  } else {
    $("emailMsg").innerHTML = `<span class = 'text-success'>Good job!</span>`;
  }
  return isValidEmail;
};

// Height validate
const heightValidate = () => {
  const heightInput = $("heightInput");
  const heightValue = heightInput.value;
  const regExpHeight = /^[\d]{0,1}\.[\d]{0,2}$/;
  let isValidHeight = true;

  if (!regExpHeight.test(heightValue)) {
    $(
      "heightMsg"
    ).innerHTML = `<span class = 'text-danger'>Your height is invalid!</span>`;
    isValidHeight = false;
  } else {
    $("heightMsg").innerHTML = `<span class = 'text-success'>Good job!</span>`;
  }
  return isValidHeight;
};

// Weight validate
const weightValidate = () => {
  const weightInput = $("weightInput");
  const weightValue = weightInput.value;
  const regExpWeight = /^[\d]{0,2}\.[\d]{1}$/;
  let isValidWeight = true;

  if (!regExpWeight.test(weightValue)) {
    $(
      "weightMsg"
    ).innerHTML = `<span class = 'text-danger'>Your weight is invalid!</span>`;
    isValidWeight = false;
  } else {
    $("weightMsg").innerHTML = `<span class = 'text-success'>Good job!</span>`;
  }
  return isValidWeight;
};

// Listen event from add button
const addFunction = () => {
  // Get data from form
  const validName = nameInputValidate();
  const validEmail = emailInputValidate();
  const validHeight = heightValidate();
  const validWeight = weightValidate();
  const nameParam = $("fullNameInput").value;
  const ageParam = $("ageInput").value;
  const emailParam = $("emailInput").value;
  const heightParam = $("heightInput").value;
  const weightParam = $("weightInput").value;

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
      nameParam,
      ageParam,
      emailParam,
      genderVal,
      heightParam,
      weightParam
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
