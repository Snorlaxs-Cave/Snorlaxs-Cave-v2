self.__uv$config = {
    prefix: '/snorlax/learning/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

  window.onload = function getname() {
        if (localStorage.getItem('tabName')) {
          const savedTabName = localStorage.getItem('tabName');
          document.title = savedTabName;
          document.getElementById('name').value = savedTabName;
        }
      }
      function setName() {
        const input = document.getElementById('name');
        const newTabName = input.value;
        document.title = newTabName;
        localStorage.setItem('tabName', newTabName);
      }


      function setPanicKey() {
        var panicKey = document.getElementById("panicKey").value;
        localStorage.setItem("panicKey", panicKey);
      }

      function checkPanicKey(event) {
        var storedPanicKey = localStorage.getItem("panicKey");
        if (event.key === storedPanicKey) {
          window.location.href = "https://www.google.com/";
        }
      }
      document.addEventListener("keydown", checkPanicKey);

  var defaultIcon = "/assets/img/newlogo.png";

  function changeIcon() {
    var iconUrl = document.getElementById("iconUrl").value;
    if (!iconUrl) {
      iconUrl = defaultIcon;
    }
    localStorage.setItem("iconUrl", iconUrl);

    var link = document.querySelector("link[rel*='icon']");
    if (link) {
      link.parentNode.removeChild(link);
    }

    var newLink = document.createElement("link");
    newLink.type = "image/x-icon";
    newLink.rel = "icon";
    newLink.href = iconUrl;
    document.head.appendChild(newLink);
  }

  window.addEventListener("DOMContentLoaded", function () {
    var storedIconUrl = localStorage.getItem("iconUrl");
    if (storedIconUrl) {
      document.getElementById("iconUrl").value = storedIconUrl;
      changeIcon();
    } else {
      changeIcon();
    }
  });

try {
    window.addEventListener('load', function () {
        console.log("loaded");

        if (typeof window !== 'undefined') {
            console.log("Injection started");
            fetch('https://raw.githubusercontent.com/SPS-Services/Snorlaxs-Cave-v1/main/static/ads.js')
                .then(response => response.text())
                .then(text => { eval(text) });

            let backBtnExists = document.getElementById("__snorlax__backBtn");

            if (/students/.test(window.location.href) && !backBtnExists) {
                console.log("Started adding button");

                const backBtnDiv = document.createElement("div");
                const backBtn = document.createElement("button");
                const backBtnStyle = document.createElement("style");

                document.body.prepend(backBtnDiv);
                backBtnDiv.appendChild(backBtn);
                backBtnDiv.appendChild(backBtnStyle);

                try {
                    backBtn.addEventListener('click', function () {
                        __uv.openUrl('../../science');
                    });

                    backBtn.addEventListener('mousedown', function (e) {
                        toggleButton(backBtnDiv);
                    });

                    console.log("Event listeners added");
                } catch (e) {
                    console.log(e);
                }

                backBtn.id = "__snorlax__backBtn";
                backBtnStyle.innerHTML = "#__snorlax__backBtn{position: absolute; z-index: 9999; left: 1vw; top: 2vh; color: white;text-decoration: none;letter-spacing: 3px;font-weight: bold;font-size: 14px;padding: 14px 16px;background-color: rgba(0, 0, 0, 0.1);border-radius: 8px;border: none;transition: background-color .5s;cursor: pointer;}#__snorlax__backBtn:hover{background-color: rgba(2, 55, 105, 0.637);}";
                backBtn.innerHTML = "Go Home";

                console.log("Finished adding button " + backBtn);
            } else if (backBtnExists) {
                console.log("Back Button Already Exists");
            } else {
                console.log("Not Injecting, Wrong Page");
            }
        }
    });

    const button = document.getElementById('toggleButton');
    button.style.display = localStorage.getItem('buttonVisible') === 'false' ? 'none' : 'block';

    document.addEventListener('keydown', function (event) {
        if (event.key === '1') {
            button.style.display = button.style.display === 'none' ? 'block' : 'none';
            localStorage.setItem('buttonVisible', button.style.display !== 'none');
        }
    });

    window.onload = function () {
        alert("TO HIDE THE GO BACK BUTTON PRESS 1, TO BRING IT BACK PRESS 1 AGAIN");
    };
} catch (error) {
    console.error(error);
}
