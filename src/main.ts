import createAccountFull from "./createAccount";
import clickEvent from "./index";

const btnCreate = document.getElementById("btn-create") as HTMLButtonElement;
const hdBtn = document.getElementById("hd-btn") as HTMLButtonElement;
const btnNewLogin = document.getElementById(
  "lg-btn-newlg"
) as HTMLButtonElement;
const btnSubmit = document.getElementById("submit") as HTMLButtonElement;
btnCreate.addEventListener("click", createAccountFull.createAccount);
hdBtn.addEventListener("click", clickEvent.activehdBtn);
btnNewLogin.addEventListener("click", clickEvent.newLogin);
btnSubmit.addEventListener("click", clickEvent.checkAccount);
