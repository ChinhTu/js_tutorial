let firstName = prompt("Enter your first name:")
let lastName = prompt("Enter your last name:")
let age = prompt("Enter your age:")
let gender = prompt("Enter your gender:")
let school = prompt("Enter your school:")
let address = prompt("Enter your address:")

if (firstName.length < 3 || lastName.length < 3 || address.length > 40) {
  alert("You entered invalid information!")
}

document.write (
  `
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>School</th>
      <th>Address</th>
    </tr>

    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${school}</td>
      <td>${address}</td>
    </tr>
  </table>
  `
)