// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// SFERA ANIMATION JS




function myFunctionanTel() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("img-1").style.transform = "rotate(15deg)";
    document.getElementById("img-1").style.opacity = "1";
    document.getElementById("img-1d").style.transform =
      "translate(100px,-36px)";
    document.getElementById("img-2d").style.transform = "translate(64px,-8px)";
    document.getElementById("img-2").style.transform = "rotate(10deg)";
    document.getElementById("img-2").style.opacity = "1";
    document.getElementById("img-3").style.opacity = "1";
  }
}


// TEL TRANSFORM

// AUTO TYPING

let text = [
  "Медицинских Клиник",
  "Диогностических центр",
  "Медицинских Учреждений",
  "Стационаров",
];
let i = 0;
let speed = 100;
let speedLast = 1000;

let typingTextIndex = 0;

function type() {
  document.getElementById("hero").innerHTML += text[typingTextIndex].charAt(i);
  i++;
  setTimeout(
    () => {
      if (i >= text[typingTextIndex].length) {
        erease();
      } else {
        type();
      }
    },
    i == text[typingTextIndex].length ? speedLast : speed
  );
}
type();

function erease() {
  document.getElementById("hero").innerHTML = document
    .getElementById("hero")
    .innerHTML.substr(0, document.getElementById("hero").innerHTML.length - 1);
  i--;
  setTimeout(() => {
    if (i <= 0) {
      if (typingTextIndex >= text.length - 1) {
        typingTextIndex = 0;
      } else {
        typingTextIndex++;
      }
      type();
    } else {
      erease();
    }
  }, speed);
}

// SOTRUDNIK

// FOOTER TYPING
let footertext = "с вами свяжемся";
let footeri = 0;
let footerspeed = 300;
function footertype() {
  document.getElementById("footer-type").innerHTML +=
    footertext.charAt(footeri);
  footeri++;
  setTimeout(() => {
    if (footeri >= footertext.length) {
      document.getElementById("footer-type").innerHTML = "";
      footeri = 0;
    }
    footertype();
  }, footerspeed);
}
footertype();
// NAVBAR
function myNavbar() {
 document.getElementById('itm-1').classList.toggle("itms-1")
 document.getElementById('itm-2').classList.toggle("itms-2")
 document.getElementById('itm-3').classList.toggle("itms-3")
}
