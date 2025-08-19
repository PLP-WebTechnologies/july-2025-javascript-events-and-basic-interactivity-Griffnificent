// script.js

// 1. DARK MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// 2. COUNTER BUTTON
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// 3. CUSTOM FORM VALIDATION
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form submission until validation passes

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    formMessage.textContent = "❌ All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  // Simple email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "❌ Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "❌ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // If validation passes
  formMessage.textContent = "✅ Registration successful!";
  formMessage.style.color = "green";
  form.reset();
});
