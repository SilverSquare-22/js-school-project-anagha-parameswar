import { forwardRef } from "react";
import { EventData } from "../types/EventData";

interface EventMarkerProps {
  event: EventData;
  isActive: boolean;
  onClick: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const EventMarker = forwardRef<HTMLButtonElement, EventMarkerProps>(
  ({ event, isActive, onClick, onKeyDown }, ref) => {
    return (
      <button
        ref={ref}
        className="event-marker"
        onClick={onClick}
        onKeyDown={onKeyDown}
        aria-current={isActive ? "true" : undefined}
        aria-label={`Event in ${event.year}: ${event.title}`}
      >
        {event.year}
      </button>
    );
  }
);

export default EventMarker;
