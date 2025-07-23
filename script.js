const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    input.value = "";
  }
});

function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const actions = document.createElement("div");
  actions.className = "actions";

    const doneBtn = document.createElement("button");
  doneBtn.innerHTML = '<span class="material-icons">check_circle</span>';
  doneBtn.title = "Tandai selesai";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });

   const delBtn = document.createElement("button");
  delBtn.innerHTML = '<span class="material-icons">delete</span>';
  delBtn.title = "Hapus";
  delBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  actions.appendChild(doneBtn);
  actions.appendChild(delBtn);
  li.appendChild(actions);

  list.appendChild(li);
}
// === DARK MODE TOGGLE ===
const toggleBtn = document.getElementById("toggle-dark");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Fungsi set ikon berdasarkan mode
function updateThemeIcon() {
  if (body.classList.contains("dark")) {
    themeIcon.textContent = "light_mode"; // 🌞
  } else {
    themeIcon.textContent = "dark_mode"; // 🌙
  }
}

// Load dark mode dari localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
}
updateThemeIcon();

// Event toggle
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Simpan preferensi
  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }

  updateThemeIcon();
});

