const themeToggleBtn = document.querySelector(".header__theme-toggle-btn");
const elements = document.querySelectorAll(
  "body, .header, .cards, .overview, .header__theme-toggle-btn"
);
let theme = localStorage.getItem("theme");

// FUNCTION TO CHECK LOCAL STORAGE FOR SELECTED THEME AND APPLY IT
const setTheme = () => {
  for (const element of elements) {
    element.classList = element.classList[0];
    element.classList.toggle(
      `${element.classList[0]}--${localStorage.getItem("theme")}-mode`
    );
  }
};

// CHECK IF THEME IS STORED IN LOCAL STORAGE AND SET DARK MODE AS DEFAULT IF IT IS NOT
if (!theme) {
  localStorage.setItem("theme", "dark");
}
setTheme();

themeToggleBtn.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    setTheme();
  } else if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    setTheme();
  }
});
