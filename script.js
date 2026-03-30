function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Log in your information");
  } else {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("secondPage").classList.remove("hidden");
  }
}