const hdBtn = document.getElementById("hd-btn");
const hdlistpg = document.querySelector(".hd-listpg");

const divNewLogin = document.getElementById("lg-newlogin");
const lgArea = document.querySelector(".lg-area");
const lgCreate = document.querySelector(".lg-create");

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
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === localStorage.user) {
    if (password === localStorage.password) {
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
