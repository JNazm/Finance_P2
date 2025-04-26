// Define correct login credentials and secret token
const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "1234";
const SECRET_TOKEN = "verySecretToken123"; // Random long string

// Login function
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    localStorage.setItem("authToken", SECRET_TOKEN);
    localStorage.setItem("loginTime", Date.now());
    window.location.href = "index.html";
  } else {
    document.getElementById("error").textContent = "Invalid username or password.";
  }

  return false;
}

// Check if logged in
function checkLogin() {
  const token = localStorage.getItem("authToken");
  const loginTime = localStorage.getItem("loginTime");
  const sessionDuration = 3600000; // 1 hour

  if (
    token !== SECRET_TOKEN ||
    !loginTime ||
    Date.now() - loginTime > sessionDuration
  ) {
    logout();
  }
}

// Logout function
function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("loginTime");
  window.location.href = "login.html";
}
