// Theme Toggle
const toggleThemeButton = document.getElementById("toggle-theme");
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleThemeButton.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});
