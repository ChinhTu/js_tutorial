const $ = (value) => {
  return document.getElementById(value);
};

/**
 * Create paragraph function
 * @returns p
 */
const createPara = () => {
  const index = Math.round(Math.random(0, 1) * 10000);
  const p = document.createElement("p");
  p.setAttribute("id", `para${index}`);
  const a = document.createElement("a");
  const span = document.createElement("span");

  a.setAttribute("href", "#");
  // a.setAttribute("name", `link-${index}`);
  a.setAttribute("onclick", `removeTask(${index})`);
  a.innerHTML = "Delete";
  span.innerHTML = $("taskInput").value;

  p.append(a);
  p.append(span);
  $("data").append(p);
  return p;
};

// Listen event for add button
const addTask = () => {
  const taskVal = $("taskInput").value;
  if (taskVal) {
    createPara();
  }
};

// Listen event for clear tasks button
const clearTasks = () => {
  $("data").remove();

  // Create new empty area
  const newArea = document.createElement("div");
  newArea.setAttribute("class", "col");
  newArea.setAttribute("style", "border: 1px solid black; height: 300px");
  newArea.setAttribute("id", "data");
  const row = document.getElementsByClassName("row")[0];
  row.append(newArea);
  return row;
};

// Delete paragraph
const removeTask = (idx) => {
  $(`para${idx}`).remove();
};
