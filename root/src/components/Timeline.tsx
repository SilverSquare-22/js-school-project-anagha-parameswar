import EventMarker from "./EventMarker";
import { EventData } from "../types/EventData";

interface TimeLineProps {
  events: EventData[];
  onSelect: (event: EventData) => void;
}

function Timeline({ events, onSelect }: TimeLineProps) {
  return (
    <div className="timeline">
      {events.map((event) => (
        <EventMarker
          key={event.year}
          event={event}
          onClick={() => onSelect(event)}
        />
      ))}
    </div>
  );
}

export default Timeline;