const nameElem = document.getElementById("name");
const emailElem = document.getElementById("email");
const messageElem = document.getElementById("message");
const submitElem = document.getElementById("btnSubmit");

nameElem.addEventListener("keyup", nameHandler);
emailElem.addEventListener("keyup", emailHandler);
messageElem.addEventListener("keyup", messageHandler);
submitElem.addEventListener("click", submitHandler);

const spanNameElem = document.createElement("span");
const spanEmailElem = document.createElement("span");
const spanMessageElem = document.createElement("span");
const spanSubmitElem = document.createElement("span");

function nameHandler(e) {
  nameElem.classList = "name";
  if (e.target.value === "") {
    spanNameElem.textContent = "* venlig indtæst dit navn.";
    nameElem.insertAdjacentElement("afterend", spanNameElem);
    spanNameElem.classList = "name-invalid";
  } else if (e.target.value != "") {
    spanNameElem.textContent = "";
    nameElem.insertAdjacentElement("afterend", spanNameElem);
    nameElem.classList = "name-valid";
  }
}

function emailHandler(e) {
  emailElem.classList = "email";
  if (e.target.value === "") {
    spanEmailElem.textContent = "* venlig indtæst din email";
    emailElem.insertAdjacentElement("afterend", spanEmailElem);
    spanEmailElem.classList = "email-invalid";
  } else if (e.target.value != "") {
    spanEmailElem.textContent = "";
    emailElem.insertAdjacentElement("afterend", spanEmailElem);
    emailElem.classList = "email-valid";
  }
}
function messageHandler(e) {
  messageElem.classList = "message";
  if (e.target.value === "") {
    spanMessageElem.textContent = "* venlig skriv beskeden";
    messageElem.insertAdjacentElement("afterend", spanMessageElem);
    spanMessageElem.classList = "message-invalid";
  } else if (e.target.value != "") {
    spanMessageElem.textContent = "";
    messageElem.insertAdjacentElement("afterend", spanMessageElem);
    messageElem.classList = "message-valid";
  }
}

let formObj = {};

function submitHandler(e) {
  e.preventDefault();
  document.getElementById("oplysninger").innerHTML = "";
  formObj = {
    name: nameElem.value,
    email: emailElem.value,
    message: messageElem.value,
  };

  if (formObj.name === "" || formObj.email === "" || formObj.message === "") {
    spanSubmitElem.textContent = "* Et af ovenstående felter mangler";
    spanSubmitElem.classList = "name-invalid";
    submitElem.insertAdjacentElement("afterend", spanSubmitElem);

    ////
    if (formObj.name === "") {
      spanNameElem.textContent = "* venlig indtæst dit navn.";
      nameElem.insertAdjacentElement("afterend", spanNameElem);
      spanNameElem.classList = "name-invalid";
    }
    ////

    ////
    if (formObj.email === "") {
      spanEmailElem.textContent = "* venlig indtæst din email";
      emailElem.insertAdjacentElement("afterend", spanEmailElem);
      spanEmailElem.classList = "email-invalid";
    }
    ////

    ////
    if (formObj.name === "") {
      spanMessageElem.textContent = "* venlig skriv beskeden";
      messageElem.insertAdjacentElement("afterend", spanMessageElem);
      spanMessageElem.classList = "message-invalid";
    }
    ////
  }
  if (formObj.name != "" && formObj.email != "" && formObj.message != "") {
    spanSubmitElem.textContent =
      "Bravo! dine indtastede oplysninger er angivet som under";
    submitElem.insertAdjacentElement("afterend", spanSubmitElem);
    spanSubmitElem.classList = "submit-valid";
    document.getElementById(
      "oplysninger"
    ).innerHTML = `<strong>Navn:</strong> <em>${formObj.name}</em>, <strong>E-mail:</strong> <em>${formObj.email}</em>, <strong>Beskeden:<strong> <em>${formObj.message}</em>`;
    nameElem.value = "";
    nameElem.classList = "name";
    emailElem.value = "";
    emailElem.classList = "email";
    messageElem.value = "";
    messageElem.classList = "message";
  }
}
