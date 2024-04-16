alert("Welcome to the BadPasswordGenerator. Follow the instructions and receive your password. Free.")
const nome = prompt("Type your name");
const cognome = prompt("Type your surname");
const colore = prompt("Type your favorite colour");
const password = nome + cognome + colore + "#24";
alert('Your VERY SAFE password is: "' + password + '"');
