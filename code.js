// document.addEventListener("DOMContentLoaded", function () {
//   if (Notification.permission !== "granted") Notification.requestPermission();
// });
//
// function notifyMe() {
//   if (!Notification) {
//     alert("Desktop notifications not available in your browser. Try Chromium.");
//     return;
//   }
//
//   if (Notification.permission !== "granted") Notification.requestPermission();
//   else {
//     let notification = new Notification("Tine-te bine!", {
//       icon: "./images/money-emoji.png",
//       body: "Ups! Se pare că ai fost hack-uit/a! Dar nu-ți face griji, este doar un memento prietenos să fii în siguranță online." +
//           " Totuși, nu da click pe acest popup 😉",
//     });
//
//
//     notification.onclick = function () {
//       window.open("https://pranx.com/hacker/");
//     };
//   }
// }
document.addEventListener("DOMContentLoaded", function () {
  // Cererea permisiunii pentru notificări
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
});

function notifyMe() {
  // Verifică dacă notificările sunt suportate
  if (!Notification) {
    alert("Notificările de desktop nu sunt disponibile în browserul tău. Încearcă Chromium.");
    return;
  }

  // Verifică permisiunea pentru notificări
  if (Notification.permission === "granted") {
    // Creați o notificare pentru desktop
    let notification = new Notification("Tine-te bine!", {
      icon: "./images/money-emoji.png",
      body: "Ups! Se pare că ai fost hack-uit/a! Dar nu-ți face griji, este doar un memento prietenos să fii în siguranță online." +
          " Totuși, nu da click pe acest popup 😉",
    });

    notification.onclick = function () {
      window.open("https://pranx.com/hacker/");
    };
  } else if (Notification.permission === "default") {
    // Dacă permisiunea este implicită, cerem permisiunea
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        notifyMe(); // Reapelați funcția pentru a crea notificarea
      }
    });
  } else {
    // Utilizați Push.js pentru mobil
    Push.create("Tine-te bine!", {
      body: "Ups! Se pare că ai fost hack-uit/a! Dar nu-ți face griji, este doar un memento prietenos să fii în siguranță online." +
          " Totuși, nu da click pe acest popup 😉",
      icon: "./images/money-emoji.png",
      timeout: 4000, // Durata de afisare (in milisecunde)
      onClick: function () {
        window.open("https://pranx.com/hacker/");
        this.close(); // Închide notificarea la click
      }
    });
  }
}

