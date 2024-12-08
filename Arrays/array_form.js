let users = [];
function handleSubmit() {
    const FirstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const user = {
        FirstName: FirstName,
        lastName: lastName,
        contact: contact,
        email: email,
    }; // capturing form data as an object
    console.log(user);
    users.push(user); //push the object into the array
    displayData();
    event.preventDefault();
}

function displayData() {
    const tbody = document.getElementById("tbody");
    console.log(Object);
    let tr = document.getElementById("tr");
    let firstNameCell = document.getElementById("td");
    let lastNameCell = document.getElementById("td");
    let contactCell = document.getElementById("td");
    let emailCell = document.getElementById("td");
    firstNameCell.innerHTML = Object.FirstName;
    lastNameCell.innerHTML = Object.lastName;
    contactCell.innerHTML = Object.contact;
    emailCell.innerHTML = Object.email;
    tr.appendChild(firstNameCell);
    tr.appendChild(lastNameCell);
    tr.appendChild(contactCell);
    tr.appendChild(emailCell);
    tbody.appendChild(tr);
}