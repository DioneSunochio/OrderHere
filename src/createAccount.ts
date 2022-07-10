const newusername = document.getElementById("newusername") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const passwordCreate = document.getElementById(
  "password-create"
) as HTMLInputElement;
const passwordConfirmation = document.getElementById(
  "password-confirmation"
) as HTMLInputElement;

function createAccount() {
  const newusernameValue = newusername.value;
  const emailValue = email.value;
  const passwordCreateValue = passwordCreate.value;
  const passwordConfirmationValue = passwordConfirmation.value;

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
  } else if (passwordCreateValue.length < 7) {
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

  const filterAllRight = smallInner.filter(
    (key) => key.innerHTML === "All right!"
  );

  if (filterAllRight.length === 4) {
    allRight(newusernameValue, emailValue, passwordCreateValue);
  }
}

function setSuccessFor(input: HTMLInputElement, message: string) {
  const divInput = input.parentElement;
  const small = divInput?.querySelector("small");

  if (small) {
    small.innerHTML = message;
  }
}

function setErrorFor(input: HTMLInputElement, message: string) {
  const divInput = input.parentElement;
  const small = divInput?.querySelector("small");

  if (small) {
    small.innerHTML = message;
  }
}

function allRight(user: string, email: string, password: string) {
  const divNewLogin = document.getElementById("lg-newlogin") as HTMLDivElement;
  const lgArea = document.querySelector(".lg-area") as HTMLDivElement;
  const lgCreate = document.querySelector(".lg-create") as HTMLDivElement;

  localStorage.setItem("user", user);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  divNewLogin.classList.remove("active");
  lgArea.classList.remove("active");
  lgCreate.classList.remove("active");
}

const createAccountFull = {
  createAccount,
  setErrorFor,
  setSuccessFor,
  allRight,
};

export default createAccountFull;
