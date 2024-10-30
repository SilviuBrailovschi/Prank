document.addEventListener("DOMContentLoaded", function () {
  if (Notification.permission !== "granted") Notification.requestPermission();
});

function notifyMe() {
  if (!Notification) {
    alert("Desktop notifications not available in your browser. Try Chromium.");
    return;
  }

  if (Notification.permission !== "granted") Notification.requestPermission();
  else {
    let notification = new Notification("Tine-te bine!", {
      icon: "./images/money-emoji.png",
      body: "Ups! Se pare că ai fost hack-uit/a! Dar nu-ți face griji, este doar un memento prietenos să fii în siguranță online." +
          " Totuși, nu da click pe acest popup 😉",
    });


    notification.onclick = function () {
      window.open("https://pranx.com/hacker/");
    };
  }
}
