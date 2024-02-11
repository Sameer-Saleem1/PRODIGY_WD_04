// ---------------------------------Typewriter Code------------------------------------

var typeWriterElement = document.getElementById("typewriter");

var textArray = ["Developer", "Designer"];
function delWriter(text, i, cb) {
  if (i >= 0) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    var rndBack = 10 + Math.random() * 100;
    setTimeout(function () {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb == "function") {
    setTimeout(cb, 1000);
  }
}
function typeWriter(text, i, cb) {
  if (i < text.length + 1) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    var rndTyping = 250 - Math.random() * 100;
    setTimeout(function () {
      typeWriter(text, i++, cb);
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(function () {
      delWriter(text, i, cb);
    }, 1000);
  }
}

function StartWriter(i) {
  if (typeof textArray[i] == "undefined") {
    setTimeout(function () {
      StartWriter(0);
    }, 1000);
  } else if (i < textArray[i].length + 1) {
    typeWriter(textArray[i], 0, function () {
      StartWriter(i + 1);
    });
  }
}
setTimeout(function () {
  StartWriter(0);
}, 1000);

// --------------------------------------About Code---------------------------------------

var tabs = document.querySelectorAll(".tab-link");
var tabContent = document.querySelectorAll(".tab-content");

function ActiveTab(tabname) {
  for (tablink of tabs) {
    tablink.classList.remove("active-link");
  }
  for (content of tabContent) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
