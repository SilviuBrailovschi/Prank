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
    var notification = new Notification("Wtf sunshine !", {
      icon: "./images/money-emoji.png",
      body: "Вы были взломаны!",
    });

    notification.onclick = function () {
      window.open("https://pranx.com/hacker/");
    };
  }
}
