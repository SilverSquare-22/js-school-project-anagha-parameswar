import { useState, useEffect } from "react";
import Header from "./Header";
import Timeline from "./Timeline";
import EventModal from "./EventModal";
import { EventData } from "../types/EventData";

function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <Header />
      <h1>Evolution of Computers</h1>
      <Timeline events={events} onSelect={(event) => setSelectedEvent(event)} />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default App;