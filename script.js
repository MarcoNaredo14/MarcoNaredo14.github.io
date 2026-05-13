const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

// Space Miner modal
const openSpaceMinerModal = document.getElementById("open-space-miner-modal");
const closeSpaceMinerModal = document.getElementById("close-space-miner-modal");
const spaceMinerModal = document.getElementById("space-miner-modal");

openSpaceMinerModal.addEventListener("click", () => {
  spaceMinerModal.classList.add("active");
});

closeSpaceMinerModal.addEventListener("click", () => {
  spaceMinerModal.classList.remove("active");
});

spaceMinerModal.addEventListener("click", (event) => {
  if (event.target === spaceMinerModal) {
    spaceMinerModal.classList.remove("active");
  }
});