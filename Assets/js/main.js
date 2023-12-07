function redirectToWifiPage() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var checkBox = document.getElementById("terms-checkbox");
  
  
  if (username.trim() === "" || password.trim() === "") {
    alert("Por favor, preencha os campos de login e senha.");
    
  } else if (!checkBox.checked) {
    alert("Por favor, concorde com os termo de responsabilidade para prosseguir.");
  } else {
    window.location.href = "wifi-publico.html";
  }
}

document.getElementById("login-button").addEventListener("click", redirectToWifiPage);
