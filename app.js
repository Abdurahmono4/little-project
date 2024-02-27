const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const AddHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", () => {
  AddHidden();
});

overlay.addEventListener("click", () => {
  AddHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    AddHidden();
  }
});
