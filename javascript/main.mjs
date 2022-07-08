import createAccountFull from "./createAccount.mjs";
import clickEvent from "./index.mjs";

const btnCreate = document.getElementById("btn-create");
const hdBtn = document.getElementById("hd-btn");
const btnNewLogin = document.getElementById("lg-btn-newlg");
const btnSubmit = document.getElementById("submit");
btnCreate.addEventListener("click", createAccountFull.createAccount);
hdBtn.addEventListener("click", clickEvent.activehdBtn);
btnNewLogin.addEventListener("click", clickEvent.newLogin);
btnSubmit.addEventListener("click", clickEvent.checkAccount);
