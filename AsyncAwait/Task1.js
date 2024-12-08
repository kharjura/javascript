// simulate a database of users
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "John@gmail.com",
        password: "John123",
    },
    {
        id: 2,
        name:"Jane Doe",
        email: "jane@g,ail.com",
        password: "jane123",
    },
    {
    id: 3,
    name: "Bob Smith",
    email: "bob@gmail.com",
    password: "bob123",
    },
];

async function login() {
    event.preventDefault();
    const email = document.getElementById("email").Value;
    const password = document.getElementById("password").Value;
    try {
        let user = await authenticateUser(email,password);
        if (user) {
            alert("login successfully");
            window.location.href =
            "https://www.google.com/search?q=cricket+india&sca_esv=1c5d2991ca1b4824&sx";
        }
    } catch(err) {
        alert(err);
    } 
}

function authenticateUser(email,password) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
        for (let user of users) {
          if (user.email === email && user.password === password) {
            resolve(user);
          } else{
            reject( "user not found");
          }
        }
    },1000);
});
}