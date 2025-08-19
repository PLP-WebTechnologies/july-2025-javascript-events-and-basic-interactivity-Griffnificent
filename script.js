// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Interactive Counter
let counter = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

// Form Validation
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    formMessage.textContent = "⚠️ Please fill out all fields!";
    formMessage.style.color = "red";
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    formMessage.textContent = "⚠️ Enter a valid email address!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = `✅ Thanks for signing up, ${name}!`;
  formMessage.style.color = "green";
  signupForm.reset();
});
