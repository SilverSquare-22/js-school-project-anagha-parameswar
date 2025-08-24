export function initModal() {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-btn");
  const title = document.getElementById("modal-title");
  const year = document.getElementById("modal-year");
  const desc = document.getElementById("modal-description");

  if (!modal || !closeBtn || !title || !year || !desc) {
    console.error("Modal elements not found");
    return;
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

export function showModal(event) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const year = document.getElementById("modal-year");
  const desc = document.getElementById("modal-description");

  if (!modal || !title || !year || !desc) return;

  title.textContent = event.title;
  year.textContent = `Year: ${event.year}`;
  desc.textContent = event.description || "";

  modal.style.display = "block";
}
