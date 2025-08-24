import { showModal } from "./modal.js";

const timeline = document.getElementById("timeline");

export function renderEvents(events) {
  if (!timeline) {
    console.error("Timeline element not found");
    return;
  }

  events.forEach((event) => {
    const marker = document.createElement("div");
    marker.classList.add("event-marker");
    marker.textContent = event.year.toString();
    marker.addEventListener("click", () => {
      showModal(event);
    });
    timeline.appendChild(marker);
  });
}