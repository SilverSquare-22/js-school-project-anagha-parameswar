import { fetchEvents } from "./fetcher";
import { renderEvents } from "./renderer";
import { initModal } from "./modal";

async function main() {
  try {
    const events = await fetchEvents();
    renderEvents(events);
    initModal();
  } catch (err) {
    console.error("Error loading events:", err);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  main();
});