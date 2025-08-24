import { EventData } from "./types";
import { showModal } from "./modal";

export function renderEvents(events: EventData[]): void {
  const timelineElement = document.getElementById("timeline");
  if (!timelineElement) throw new Error("Timeline element not found");

  // Clear any existing markers
  timelineElement.innerHTML = "";

  events.forEach((event) => {
    const marker = document.createElement("div");
    marker.classList.add("event-marker");
    marker.textContent = event.year.toString();
    marker.addEventListener("click", () => showModal(event));
    timelineElement.appendChild(marker);
  });
}