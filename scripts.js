 const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
function openChat() {
  document.getElementById("chatbot").style.display = "block";
  document.querySelector(".chat-icon").style.display = "none";
}

function closeChat() {
  document.getElementById("chatbot").style.display = "none";
  document.querySelector(".chat-icon").style.display = "flex";
}

function addBotMessage(text) {
  const chat = document.getElementById("chatBody");
  const msg = document.createElement("div");
  msg.className = "bot-message";
  msg.innerHTML = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function getCode() {
  addBotMessage(
    "💬To make an enquiry, please contact us via our official social media handles."
  );
}

function register() {
  addBotMessage(
    "📝 Send Us a message ,and we'll respond as soon as possible."
  );
}
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");

  menuBtn.addEventListener("click", () => {
    menuOverlay.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !menuOverlay.contains(e.target)) {
      menuOverlay.classList.remove("open");
    }
  });
