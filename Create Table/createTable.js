// Global variables
const $ = (value) => {
  return document.getElementById(value);
};

const getName = (value) => {
  return document.getElementsByName(value);
};

/**
 * Create button function
 * @param {string} name
 * @returns btn
 */
const createButton = (name) => {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.innerHTML = name;
  return btn;
};

/**
 * Create table headers
 * @returns thead
 */
const createTableHeader = () => {
  // Header variables
  const headers = [
    "Num",
    "Full name",
    "Age",
    "Email",
    "Gender",
    "BMI",
    "Health status",
    "Actions",
  ];
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerHTML = header;
    tr.append(th);
  });
  thead.append(tr);
  return thead;
};

/**
 * Create table body
 * @returns tbody
 */
const createTableBody = (dataArray) => {
  const tbody = document.createElement("tbody");
  dataArray.forEach((element, index) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", `row${index + 1}`);
    const numTd = document.createElement("td");
    const fullNameTd = document.createElement("td");
    const ageTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const bmiTd = document.createElement("td");
    const healthsttTd = document.createElement("td");
    const actionsTd = document.createElement("td");

    // Set content for each cell
    numTd.innerHTML = index + 1;
    fullNameTd.innerHTML = element.fullName;
    ageTd.innerHTML = element.age;
    emailTd.innerHTML = element.email;
    genderTd.innerHTML = element.gender;
    bmiTd.innerHTML = element.BMI;
    healthsttTd.innerHTML = element.healthStt;

    // Call create button function
    const editBtn = createButton("Edit");
    const deleteBtn = createButton("Delete");

    // Listen event for edit button
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#editModal");
    editBtn.setAttribute("data-bs-whatever", "@getbootstrap");
    editBtn.setAttribute("onclick", `editRow(${index})`);

    // Listen event for delete button
    deleteBtn.setAttribute("data-bs-toggle", "modal");
    deleteBtn.setAttribute("data-bs-target", "#deleteModal");
    deleteBtn.setAttribute("onclick", `deleteRow(${index})`);
    actionsTd.append(editBtn);
    actionsTd.append(deleteBtn);

    // Push
    tr.append(numTd);
    tr.append(fullNameTd);
    tr.append(ageTd);
    tr.append(emailTd);
    tr.append(genderTd);
    tr.append(bmiTd);
    tr.append(healthsttTd);
    tr.append(actionsTd);

    tbody.append(tr);
  });
  return tbody;
};

// Create table function
const createTable = (dataArray) => {
  const table = document.createElement("table");
  table.setAttribute("id", "userTable");
  table.setAttribute("class", "table table-success table-striped");
  const tableHeader = createTableHeader();
  const tableBody = createTableBody(dataArray);

  table.append(tableHeader);
  table.append(tableBody);
  return table;
};

// Execute functions
const sectionData = $("data");
const finalTable = createTable(dataArray);
sectionData.append(finalTable);
