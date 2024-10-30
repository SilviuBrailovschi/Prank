document.addEventListener("DOMContentLoaded", function () {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
});

function notifyMe() {
  if (!Notification) {
    alert("Notificările de desktop nu sunt disponibile în browserul tău. Încearcă Chromium.");
    return;
  }

  if (Notification.permission === "granted") {
    let notification = new Notification("Tine-te bine!", {
      icon: "./images/money-emoji.png",
      body: "Ups! Se pare că ai fost hack-uit/a! Dar nu-ți face griji, este doar un memento prietenos să fii în siguranță online." +
          " Totuși, nu da click pe acest popup 😉",
    });

    notification.onclick = function () {
      window.open("https://pranx.com/hacker/");
    };
  } else if (Notification.permission === "default") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        notifyMe();
      }
    });
  } else {
    Push.create("Tine-te bine!", {
      body: "Ups! Se pare că ai fost hack-uit/a! Dar nu-ți face griji, este doar un memento prietenos să fii în siguranță online." +
          " Totuși, nu da click pe acest popup 😉",
      icon: "./images/money-emoji.png",
      timeout: 4000,
      onClick: function () {
        window.open("https://pranx.com/hacker/");
        this.close();
      }
    });
  }
}

