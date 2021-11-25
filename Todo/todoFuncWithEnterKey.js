// Listen event for enter keypress
var input = document.getElementById("inputText");
input.addEventListener("keyup", function (event) {
  const key = event.keyCode;
  // The Enter keycode is 13
  if (key === 13) {
    // Random index for paragraph ID
    const index = Math.round(Math.random(0, 1) * 10000);
    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    // Create and set id for paragraph
    const p = document.createElement("p");
    p.setAttribute("id", `para${index}`);

    // Create span with text into para
    const span = document.createElement("span");
    span.innerHTML = $("inputText").value;

    // Create delete button into para
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.innerHTML = "Delete";
    // Set event click for delete button to remove 1 row
    btn.setAttribute("onclick", `removeTask(${index})`);
    btn.setAttribute("class", "btn btn-danger");

    // Append into p
    p.append(checkbox);
    p.append(span);
    p.append(btn);

    // Append p into data div
    $("data").append(p);
    return p;
  }
});

// Delete row function
const removeTask = (index) => {
  $(`para${index}`).remove();
};
