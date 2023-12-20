let listaUseri = [];
let listaUseriLocalStorage = localStorage.getItem("users");
if (listaUseriLocalStorage != null) {
  listaUseri = JSON.parse(listaUseriLocalStorage);
}
class User {
  constructor(user, pass, email) {
    this.user = user;
    this.pass = pass;
    this.email = email;
  }
}

function userExists(user) {
  let userExists = false;
  listaUseri.forEach((element) => {
    if (element.email === user.email) {
      userExists = true;
    }
  });
  return userExists;
}

$("#signUpBtn").click(function () {
  let newUser = new User(
    $("#loginName").val(),
    $("#loginPassword").val(),
    $("#email").val()
  );
  if (!userExists(newUser)) {
    listaUseri.push(newUser);
    localStorage.users = JSON.stringify(listaUseri);
    alert("Utilizatorul a fost creat cu succes!");
  } else {
    alert("Utilizatorul cu adresa de mail" + newUser.email + " exista!");
  }
});

$("#logInBtn").click(function () {
  let userCorrect = false;
  listaUseri.forEach((element) => {
    if (
      $("#loginName").val() == element.user &&
      $("#loginPassword").val() == element.pass
    ) {
      userCorrect = true;
      localStorage.setItem("loggedInUser", JSON.stringify(element));
      window.open("user.html");
    }
  });
  if (!userCorrect) {
    alert("User/pass nu exista sau sunt gresite!");
  }
});
