// Delete row function
const deleteRow = (index) => {
  // Build click event for Yes button
  $("yesBtn").setAttribute("onclick", `confirmDel(${index})`);
};

// When u click Yes button, this row will be delete
const confirmDel = (index) => {
  dataArray.splice(index, 1);
  const sectionData = $("data");
  const newTable = $("userTable");
  newTable.remove();
  const finalTable = createTable(dataArray);
  sectionData.append(finalTable);
};
