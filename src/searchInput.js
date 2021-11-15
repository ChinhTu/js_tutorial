// Search function
const search = () => {
  const searchInputVal = $("searchInput").value;
  const searchOptionVal = $("searchOption").value;

  const searchPerson = [];
  dataArray.forEach((element) => {
    if (element[searchOptionVal].indexOf(searchInputVal) !== -1) {
      searchPerson.push(element);
    }
  });

  $("userTable").remove();
  const searchedTable = createTable(searchPerson);
  $("data").append(searchedTable);
};
