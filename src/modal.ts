import { EventData } from "./types";

const modal = document.getElementById("modal") as HTMLElement;
const closeBtn = document.getElementById("close-btn") as HTMLElement;
const modalTitle = document.getElementById("modal-title") as HTMLElement;
const modalYear = document.getElementById("modal-year") as HTMLElement;
const modalDescription = document.getElementById("modal-description") as HTMLElement;

export function showModal(event: EventData): void {
  modalTitle.textContent = event.title;
  modalYear.textContent = `Year: ${event.year}`;
  modalDescription.textContent = event.description;
  modal.style.display = "block";
}

export function initModal(): void {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}