// With the param is select box value
const selectValidate = (selectValue) => {
  if (selectValue === "0") {
    $("cityMsg").innerHTML =
      "<span class='text-danger'>You must choose one!</span>";
  } else if (selectValue === "1") {
    $("cityMsg").innerHTML =
      "<span class='text-success'>You have chosen option 1!</span>";
  } else if (selectValue === "2") {
    $("cityMsg").innerHTML =
      "<span class='text-success'>You have chosen option 2!</span>";
  } else {
    $("cityMsg").innerHTML =
      "<span class='text-success'>You have chosen option 3!</span>";
  }
};
