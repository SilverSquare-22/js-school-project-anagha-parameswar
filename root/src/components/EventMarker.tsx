import { EventData } from "../types/EventData";

interface EventMarkerProps {
    event: EventData;
    onClick: () => void;
}

function EventMarker ({ event, onClick }: EventMarkerProps) {
    return (
        <div className="event-marker" onClick={onClick}>
            <span className="dot">.</span>
            <span>{event.year} - {event.title}</span>
        </div>
    );
}

export default EventMarker;