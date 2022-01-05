let word = document.querySelector("#wordGroup");

word.addEventListener("mouseover", (e) => {
  e.target.style.color = "red";
  setTimeout(() => {
    e.target.style.color = "";
  }, 500);
});
