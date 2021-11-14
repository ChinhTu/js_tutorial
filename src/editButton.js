const editRow = (index) => {
  const editFullName = $("editFullName");
  const editAge = $("editAge");
  const editEmail = $("editEmail");
  const editHeight = $("editHeight");
  const editWeight = $("editWeight");

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

const confirmEdit = (index) => {
  const genderEdit = getName("editGender");
  let gender = "";
  genderEdit.forEach((element) => {
    if (element.checked) {
      gender = element.value;
    }
    return gender;
  });

  const editPerson = new Person(
    editFullName.value,
    editAge.value,
    editEmail.value,
    gender,
    editHeight.value,
    editWeight.value
  );

  // const confirmName = nameInputValidate();
  // const confirmEmail = emailInputValidate();
  // const confirmHeight = heightValidate();
  // const confirmWeight = weightValidate();

  // if (confirmName && confirmEmail && confirmHeight && confirmWeight) {
  dataArray.splice(index, 1, editPerson);
  const editedArr = dataArray.map((obj) => {
    obj.BMI = obj.calculateBMI().toFixed(1);
    obj.healthStt = obj.guessHealth();
    return obj;
  });

  $("userTable").remove();

  const editedTable = createTable(editedArr);
  $("data").append(editedTable);
};
