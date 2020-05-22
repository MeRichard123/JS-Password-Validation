const passwordInput = document.querySelector(".login__input");
const characters = document.querySelector("[data-chars]");
const charCase = document.querySelector("[data-case]");
const charNumb = document.querySelector("[data-numbers]");
const charSpecial = document.querySelector("[data-special]");
const progressBar = document.querySelector("#chars");
const Form = document.querySelector("[data-form]");
const fadeTarget = document.querySelector(".loader-container");

const green = "#4cd137";
const red = "#e84118";

function fadeOutEffect() {
  const fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.3;
    } else {
      clearInterval(fadeEffect);
    }
  }, 1000);
}

window.addEventListener("load", () => {
  fadeOutEffect();
  setTimeout(() => {
    fadeTarget.style.display = "none";
  }, 1100);
});

passwordInput.addEventListener("keyup", () => {
  // Check the length
  inputChars = passwordInput.value.length;
  if (inputChars <= 6) {
    progressBar.value = inputChars;
  }
  if (progressBar.value == 6) {
    characters.style.color = green;
  } else {
    characters.style.color = red;
  }
  // Check for uppercase and lowercase
  if (hasLowerCase(passwordInput.value) && hasUpperCase(passwordInput.value)) {
    charCase.style.color = green;
  } else {
    charCase.style.color = red;
  }
  // Check for numbers
  if (hasNumbers(passwordInput.value)) {
    charNumb.style.color = green;
  } else {
    charNumb.style.color = red;
  }
  // Check for symbols
  if (hasSpecial(passwordInput.value)) {
    charSpecial.style.color = green;
  } else {
    charSpecial.style.color = red;
  }
});

function hasLowerCase(str) {
  return /[a-z]/.test(str);
}
function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
function hasNumbers(str) {
  return /[0-9]/.test(str);
}
function hasSpecial(str) {
  return /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(str);
}

if (Form.addEventListener) {
  Form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (
      progressBar.value == 6 &&
      hasLowerCase(passwordInput.value) &&
      hasUpperCase(passwordInput.value) &&
      hasNumbers(passwordInput.value) &&
      hasSpecial(passwordInput.value)
    ) {
      alert("Success");
    } else {
      alert("Password didn't match required strength");
    }
  });
}
