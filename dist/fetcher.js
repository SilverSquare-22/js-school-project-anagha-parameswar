export async function fetchEvents() {
  try {
    const response = await fetch("./data/events.json"); // relative to index.html
    if (!response.ok) throw new Error("Failed to load events.json");
    return response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}