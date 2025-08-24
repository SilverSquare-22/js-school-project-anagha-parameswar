import { EventData } from "../types/EventData";

interface EventMarkerProps {
  event: EventData;
  onClick: () => void;
}

function EventMarker({ event, onClick }: EventMarkerProps) {
  return (
    <button className="event-marker" onClick={onClick}>
      {event.year}
    </button>
  );
}

export default EventMarker;
