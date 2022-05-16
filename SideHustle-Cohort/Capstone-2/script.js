// NAVBAR OPENING AND CLOSING

const hamburgerBars = document.getElementsByClassName("hamburger");
const hamburgerCross = document.getElementsByClassName("hamburger_two");
const hamburgerMenu = document.getElementsByClassName("open_navbar");
hamburgerBars[0].addEventListener("click", expand);
hamburgerCross[0].addEventListener("click", close);

function expand() {
  hamburgerMenu[0].style.display = "block";
  hamburgerBars[0].style.display = "none";
  hamburgerCross[0].style.display = "block";
}
function close() {
  hamburgerMenu[0].style.display = "none";
  hamburgerBars[0].style.display = "block";
  hamburgerCross[0].style.display = "none";
}

// FORM VALIDATION

const UserName = document.getElementById("userName");
const EMail = document.getElementById("email");
const PhoneNumber = document.getElementById("phone");
const Password = document.getElementById("password");
const ConfirmPassword = document.getElementById("confirmPassword");

function FormValidation() {
  if (UserName.value === "") {
    UserName.nextElementSibling.style.visibility = "visible";
    UserName.style.border = "3px solid red";
    return false;
  } else {
    UserName.nextElementSibling.style.visibility = "hidden";
  }
  if (EMail.value === "") {
    EMail.nextElementSibling.style.visibility = "visible";
    EMail.style.border = "3px solid red";
    return false;
  } else {
    EMail.nextElementSibling.style.visibility = "hidden";
  }
  if (PhoneNumber.value === "") {
    PhoneNumber.nextElementSibling.style.visibility = "visible";
    PhoneNumber.style.border = "3px solid red";
    return false;
  } else {
    PhoneNumber.nextElementSibling.style.visibility = "hidden";
  }
  if (Password.value === "") {
    Password.nextElementSibling.style.visibility = "visible";
    Password.style.border = "3px solid red";
    return false;
  } else {
    Password.nextElementSibling.style.visibility = "hidden";
  }
  if (
    ConfirmPassword.value === "" ||
    ConfirmPassword.value !== Password.value
  ) {
    ConfirmPassword.nextElementSibling.innerHTML = "Passwords don't match";
    ConfirmPassword.nextElementSibling.style.visibility = "visible";
    ConfirmPassword.style.border = "3px solid red";
    return false;
  } else {
    ConfirmPassword.nextElementSibling.style.visibility = "hidden";
  }
}

// TOGGLE PASSWORD VISIBILITY
var FirstOpen = document.getElementById("first_passOpen");
var FirstSlashed = document.getElementById("first_passSlashed");
var ConfirmOpen = document.getElementById("confirmOpen");
var ConfirmSlashed = document.getElementById("confirmSlashed");

FirstOpen.addEventListener("click", hide);
FirstSlashed.addEventListener("click", reveal);
ConfirmOpen.addEventListener("click", hideConfirm);
ConfirmSlashed.addEventListener("click", revealConfirm);

function reveal() {
  FirstSlashed.style.display = "none";
  FirstOpen.style.display = "inline";
  Password.type = "text";
}
function hide() {
  FirstOpen.style.display = "none";
  FirstSlashed.style.display = "inline";
  Password.type = "password";
}
function revealConfirm() {
  ConfirmSlashed.style.display = "none";
  ConfirmOpen.style.display = "inline";
  ConfirmPassword.type = "text";
}
function hideConfirm() {
  ConfirmOpen.style.display = "none";
  ConfirmSlashed.style.display = "inline";
  ConfirmPassword.type = "password";
}
