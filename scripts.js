 const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}
