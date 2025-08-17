import { fetchEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";
import { initModal } from "./modal.js";

async function main() {
  try {
    const events = await fetchEvents();
    console.log("Loaded events:", events);
    renderEvents(events);
    initModal();
  } catch (err) {
    console.error("Error initializing app:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  main();

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }
});