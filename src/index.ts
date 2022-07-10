const hdBtn = document.getElementById("hd-btn") as HTMLButtonElement;
const hdlistpg = document.querySelector(".hd-listpg") as HTMLUListElement;

const divNewLogin = document.getElementById("lg-newlogin") as HTMLDivElement;
const lgArea = document.querySelector(".lg-area") as HTMLDivElement;
const lgCreate = document.querySelector(".lg-create") as HTMLDivElement;

function activehdBtn() {
  hdBtn.classList.toggle("active");
  hdlistpg.classList.toggle("active");
}

function newLogin() {
  divNewLogin.classList.toggle("active");
  lgArea.classList.toggle("active");
  lgCreate.classList.toggle("active");
}

function checkAccount() {
  const username = document.getElementById("username") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const usernameValue = username?.value;
  const passwordValue = password?.value;

  if (usernameValue === localStorage.user) {
    if (passwordValue === localStorage.password) {
      return window.open("https://www.linkedin.com/feed/", "_blanck");
    }
  } else {
    alert("User or password incorrect.");
  }
}

const clickEvent = {
  activehdBtn,
  newLogin,
  checkAccount,
};

export default clickEvent;
