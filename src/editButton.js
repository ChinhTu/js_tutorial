// $("saveBtn").setAttribute("disabled", "");

// Get value for gender
const editRow = (index) => {
  if (dataArray[index].gender === "male") {
    $("maleEdit").checked = true;
  }

  if (dataArray[index].gender === "female") {
    $("femaleEdit").checked = true;
  }

  if (dataArray[index].gender === "other") {
    $("otherEdit").checked = true;
  }

  // Set value for modal form
  editFullName.value = dataArray[index].fullName;
  editAge.value = dataArray[index].age;
  editEmail.value = dataArray[index].email;
  editGender.value = dataArray[index].gender;
  editHeight.value = dataArray[index].height;
  editWeight.value = dataArray[index].weight;

  $("saveBtn").setAttribute("onclick", `confirmEdit(${index})`);
};

// Listen event for Save button
const confirmEdit = (index) => {
  const genderEdit = getName("editGender");
  let gender = "";
  genderEdit.forEach((element) => {
    if (element.checked) {
      gender = element.value;
    }
    return gender;
  });

  const editFullNameVal = $("editFullName").value;
  const editFullNameMsg = $("editFullNameMsg");

  const editAge = $("editAge");

  const editEmailVal = $("editEmail").value;
  const editEmailMsg = $("editEmailMsg");

  const editHeightVal = $("editHeight").value;
  const editHeightMsg = $("editHeightMsg");

  const editWeightVal = $("editWeight").value;
  const editWeightMsg = $("editWeightMsg");

  const editPerson = new Person(
    editFullNameVal,
    editAge.value,
    editEmailVal,
    gender,
    editHeightVal,
    editWeightVal
  );

  const confirmName = nameInputValidate(editFullNameVal, editFullNameMsg);
  const confirmEmail = emailInputValidate(editEmailVal, editEmailMsg);
  const confirmHeight = heightValidate(editHeightVal, editHeightMsg);
  const confirmWeight = weightValidate(editWeightVal, editWeightMsg);

  if (confirmName && confirmEmail && confirmHeight && confirmWeight) {
    // $("saveBtn").removeAttribute("disabled", "");
    dataArray.splice(index, 1, editPerson);
  }
  const editedArr = dataArray.map((obj) => {
    obj.BMI = obj.calculateBMI().toFixed(1);
    obj.healthStt = obj.guessHealth();
    return obj;
  });
  $("userTable").remove();

  const editedTable = createTable(editedArr);
  $("data").append(editedTable);
};
