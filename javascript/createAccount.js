const newusername = document.getElementById("newusername");
const email = document.getElementById("email");
const passwordCreate = document.getElementById("password-create");
const passwordConfirmation = document.getElementById("password-confirmation");
const btnCreate = document.getElementById("btn-create");

function createAccount() {
  newusernameValue = newusername.value;
  emailValue = email.value;
  passwordCreateValue = passwordCreate.value;
  passwordConfirmationValue = passwordConfirmation.value;

  if (newusernameValue === "") {
    setErrorFor(newusername, "*Username is required.");
  } else {
    setSuccessFor(newusername, "All right!");
  }

  if (emailValue === "") {
    setErrorFor(email, "*Email is required.");
  } else {
    setSuccessFor(email, "All right!");
  }

  if (passwordCreateValue === "") {
    setErrorFor(passwordCreate, "*Please, type your password");
  } else if (passwordCreateValue < 8) {
    setErrorFor(passwordCreate, "*Your password need 8 characters.");
  } else {
    setSuccessFor(passwordCreate, "All right!");
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "*Please, confirm your password.");
  } else if (passwordConfirmationValue !== passwordCreateValue) {
    setErrorFor(passwordConfirmation, "*Differents passwords.");
  } else {
    setSuccessFor(passwordConfirmation, "All right!");
  }

  const allSmall = document.querySelectorAll("small");
  const smallInner = [...allSmall];
  for (key of smallInner) {
    if (key.innerHTML === "All right!") {
      allRight(newusernameValue, emailValue, passwordCreateValue);
    }
  }
}

function setSuccessFor(input, message) {
  const divInput = input.parentElement;
  const small = divInput.querySelector("small");

  small.innerHTML = message;
}

function setErrorFor(input, message) {
  const divInput = input.parentElement;
  const small = divInput.querySelector("small");

  small.innerHTML = message;
}

function allRight(user, email, password) {
  const divNewLogin = document.getElementById("lg-newlogin");
  const lgArea = document.querySelector(".lg-area");
  const lgCreate = document.querySelector(".lg-create");

  localStorage.setItem("user", user);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  divNewLogin.classList.remove("active");
  lgArea.classList.remove("active");
  lgCreate.classList.remove("active");
}

btnCreate.addEventListener("click", createAccount);
