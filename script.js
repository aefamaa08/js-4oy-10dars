// document.querySelector(".btn").addEventListener("click", async () => {

//     Toastify({
//         text: "Hello Ulubekpuyicha devochka",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//             background: "linear-gradient(to right, #00b09b, #96c93d)"
//         },
//         onClick: function () {}
//     }).showToast();

    
function showNotification(type) {

    var notification = document.createElement("div");

  
    var colors = {
      success: "green",
      fail: "red",
      warning: "orange"
    };

    var messages = {
      success: "Well done!",
      fail: "Oh snap! Something went wrong.",
      warning: "Warning!"
    };

   
    notification.style.backgroundColor = colors[type];
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.margin = "10px";
    notification.style.borderRadius = "8px";
    notification.style.position = "relative";
    notification.style.minWidth = "200px";

  
    notification.textContent = messages[type];

    var closeBtn = document.createElement("span");
    closeBtn.style.marginLeft = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "10px";
    closeBtn.style.top = "5px";
    closeBtn.onclick = function () {
      notification.remove();
    };

    notification.appendChild(closeBtn);

    var container = document.querySelector(".notification-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "notification-container";
      container.style.position = "fixed";
      container.style.top = "20px";
      container.style.right = "20px";
      container.style.display = "flex";
      container.style.flexDirection = "column";
      document.body.appendChild(container);
    }

    container.appendChild(notification);

    setTimeout(function () {
      notification.remove();
    }, 3000);
  }
