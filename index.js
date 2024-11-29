const users = [
  { username: 'ADMIN', password: 'ADMIN' },
  { username: 'Gamjub', password: 'TheGemjub1234' },
  { username: 'DenisH', password: 'Stitch' },
];

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Login erfolgreich
        localStorage.setItem("loggedInUser", username);
        window.location.href = "home.html";
    } else {
        // Fehlermeldung
        document.getElementById("error-message").textContent = "Benutzername oder Passwort ist falsch!";
    }
});
