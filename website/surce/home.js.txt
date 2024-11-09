document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        // Den Benutzernamen anzeigen
        document.getElementById("welcome-message").textContent = `Angemeldet als: ${loggedInUser}`;
        
        // Abmelde-Button anzeigen und Funktion hinzufügen
        document.getElementById("logoutButton").addEventListener("click", function() {
            // Lokale Speicherung löschen und zur Login-Seite umleiten
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    } else {
        // Falls der Benutzer nicht eingeloggt ist, zurück zur Login-Seite
        window.location.href = "index.html";
    }
});
