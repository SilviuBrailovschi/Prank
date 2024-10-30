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
    let notification = new Notification("Hold on tight!", {
      icon: "./images/money-emoji.png",
      body: "Uh-oh! Looks like you've been hacked! But don't worry, it’s just a friendly reminder to stay safe online." +
          "Don't click on this popup though 😉",
    });

    notification.onclick = function () {
      window.open("https://pranx.com/hacker/");
    };
  }
}
