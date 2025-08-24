const timeline = document.getElementById ("timeline");
const modal = document.getElementById ("modal");
const closeBtn = document.getElementById ("close-btn");
const modalTitle = document.getElementById ("modal-title");
const modalYear = document.getElementById ("modal-year");
const modalDescription = document.getElementById ("modal-description");
fetch ("data/events.json")
.then (response => response.json ())
.then (events => {
    events.forEach ((event) => {
        const marker = document.createElement ("div");
        marker.classList.add ("event-marker");
        marker.textContent = event.year;
        marker.addEventListener ("click", () => {
            showModal (event);
        });
        timeline.appendChild (marker);
    });
})
.catch (err => console.error ("Error loading events: ", err));
function showModal (event) {
    modalTitle.textContent = event.title;
    modalYear.textContent = `Year: ${event.year}`;
    modalDescription.textContent = event.description;
    modal.style.display = "block";
} closeBtn.addEventListener ("click", () => {
    modal.style.display = "none";
}); window.addEventListener ("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});