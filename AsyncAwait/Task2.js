let users = [];

async function fetchData() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => {
      users = response;
    })
    .catch((err) => console.log(err));
}

function handleSubmit() {
  event.preventDefault();
  let id = document.getElementById("id").value;
  id = parseInt(id);
  let email = document.getElementById("email").value;
  alert(id + "" + email);
  let userobj = {
    id: id,
    email: email,
  };
  authenticateUser(userobj, users);
}

function authenticateUser(userobj, users) {
  let { id, email } = userobj; //deconstructing userobj
  for (let user of users) {
    if (id == user.id && email == user.email) {
      showprofile(user);
    }
  }
}

function showprofile(user) {
 let proTable = document.getElementById("table");
 for (let key in user) {
    let row = document.createElement("tr");
    let keyCell = document.createElement("td");
    let valueCell = document.createElement("td");
    keyCell.innerHTML = key;
    valueCell.innerHTML = user[key];
    row.appendChild(keyCell);
    row.appendChild(valueCell);
    proTable.appendChild(row);
 }
}
fetchData();
