/**
 * Create paragraph function
 * @returns p
 */
const createPara = (dataSection) => {
  //  Random id for paragraph
  const index = Math.round(Math.random(0, 1) * 10000);
  // Create paragraph with a delete link and a text span
  const p = document.createElement("p");
  p.setAttribute("id", `para${index}`);
  const a = document.createElement("a");
  const span = document.createElement("span");

  a.setAttribute("href", "#");
  // when u click a link, delete that row
  a.setAttribute("onclick", `removeTask(${index})`);
  a.innerHTML = "Delete";
  span.innerHTML = $("taskInput").value;

  // Append child into parents
  p.append(a);
  p.append(span);
  dataSection.append(p);
  return p;
};

// Listen event for add button (builded the onclick event for add button in HTML)
const addTask = () => {
  // Get the value input
  const taskVal = $("taskInput").value;
  // If user enter a text, call the function
  if (taskVal) {
    createPara();
  }
};
