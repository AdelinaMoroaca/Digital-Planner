$(".message a").click(function () {
  $("form").toggle({ height: "toggle", opacity: "toggle" }, "slow");

  // $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

// form createAccount - validare
// const regForm = document.forms["createAccount"];
let inputName = document.getElementById("name");
let inputPass = document.getElementById("password");
let inputEmail = document.getElementById("email");
const inputLoginName = document.getElementById("loginName");
const inputLoginPass = document.getElementById("loginPass");

inputName.addEventListener("keyup", function () {
  const textRegex = /^[a-zA-Z]+$/;
  if (!textRegex.test(this.value)) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "green";
  }
});

inputPass.addEventListener("keyup", function () {
  const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!passRegex.test(this.value)) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "green"; //current regex only matches that you have 6 to 16 valid characters, it doesn't validate that it has at least a number, and at least a special character.
  }
});

inputEmail.addEventListener("keyup", function () {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(this.value)) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "green";
  }
});

// form login - validare
// inputLoginName.addEventListener("keyup", function () {
//   const textRegex = /^[a-zA-Z]+$/;
//   if (!textRegex.test(this.value)) {
//     this.style.backgroundColor = "red";
//   } else {
//     this.style.backgroundColor = "green";
//   }
// });

// inputLoginPass.addEventListener("keyup", function () {
//   const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//   if (!passRegex.test(this.value)) {
//     this.style.backgroundColor = "red";
//   } else {
//     this.style.backgroundColor = "green"; //current regex only matches that you have 6 to 16 valid characters, it doesn't validate that it has at least a number, and at least a special character.
//   }
// });

// document.getElementById("myButton").onclick = function () {
//     location.href = "index2.html";
// };

//-----local storage create------------------------------------------------------------------------
// let inputName = document.getElementById("name");
// let inputPass = document.getElementById("password");
// let inputEmail = document.getElementById("email");
let registerInput = document.getElementById("createAccount");
// localStorage.setItem("accountName", registerName.value);
// localStorage.setItem("accountPass", registerPass.value);
// localStorage.setItem("accountEmail", registerEmail.value);
let storedName = localStorage.getItem("accountName");

// function saveData() {
//   let inputName = document.getElementById("name");
//   let inputPass = document.getElementById("password");
//   let inputEmail = document.getElementById("email");
//   localStorage.setItem("name", inputName.value);
//   localStorage.setItem("password", inputPass.value);
//   localStorage.setItem("email", inputEmail.value);
// }

// registerInput.addEventListener("click", saveData);

class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

let useri = [];
let listaUseri = localStorage.getItem("bazaUseri");
if (listaUseri != null) {
  useri = JSON.parse(listaUseri);
}
useri = JSON.parse(listaUseri);
registerInput.addEventListener("click", function () {
  let user = new User(
    inputName.value,
    inputPass.value,
    inputEmail.value
  );
  useri.push(user);
  localStorage.setItem("bazaUseri", JSON.stringify(useri));
  //localStorage.bazaUseri = JSON.stringify(useri);
  console.log(localStorage.getItem("bazaUseri"));
  inputName.value = "";
  inputPass.value = "";
  inputEmail.value = "";
});


//-------local storange login------------------------------------------------------------

let userLogin = document.getElementById("loginName");
let passLogin = document.getElementById("loginPassword");
let accountLogin = document.getElementById("userLoginAccount");

class Login {
  constructor(loginName, loginPassword) {
    this.loginName = loginName;
    this.loginPassword = loginPassword;
  }
}

let listLogin = [];
let listaUserLogin = localStorage.getItem("bazaUserLogin");
if (listaUserLogin != null) {
  listLogin = JSON.parse(listaUserLogin);
}
listLogin = JSON.parse(listaUserLogin);
accountLogin.addEventListener("click", function () {
  // let user = new User(
  //   inputName.value,
  //   inputPass.value,
  //   inputEmail.value
  // );
  // useri.push(user);
  // localStorage.setItem("bazaUseri", JSON.stringify(useri));
  // //localStorage.bazaUseri = JSON.stringify(useri);
  // console.log(localStorage.getItem("bazaUseri"));
  // inputName.value = "";
  // inputPass.value = "";
  // inputEmail.value = "";
});

