

export function forTest () {
  return 5
}

const h1 = document.querySelector(".zagolovok");
const miniText = document.querySelector(".mini_text");
const infor = document.querySelector(".item");
const buttonInlock = document.querySelector(".unlock");


document.addEventListener('DOMContentLoaded', () => {
h1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(miniText.classList.toggle("unvis"));
  // miniText.classList.toogle("unvis")
});

infor.addEventListener("mouseover", () => {
  buttonInlock.classList.remove("unvis");
});

infor.addEventListener("mouseout", () => {
  buttonInlock.classList.add("unvis");
});
})