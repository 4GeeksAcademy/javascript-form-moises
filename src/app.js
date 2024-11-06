/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const sendButton = document.querySelector(".btn-primary");
  const alertMessage = document.querySelector(".alert");

  alertMessage.style.display = "none";

  function validateForm(event) {
    let isValid = true;

    const inputs = form.querySelectorAll(
      'input[type="text"], input[type="number"], textarea, select'
    );

    inputs.forEach(input => {
      if (input.tagName === "SELECT") {
        if (input.value === "" || input.value === "Pick a state") {
          input.classList.add("is-invalid", "input-error");
          isValid = false;
        } else {
          input.classList.remove("is-invalid", "input-error");
        }
      } else {
        if (input.value.trim() === "") {
          input.classList.add("is-invalid", "input-error");
          isValid = false;
        } else {
          input.classList.remove("is-invalid", "input-error");
        }
      }
    });

    if (!isValid) {
      alertMessage.style.display = "block";
      event.preventDefault();
    } else {
      alertMessage.style.display = "none";
    }
  }

  sendButton.addEventListener("click", validateForm);
});
