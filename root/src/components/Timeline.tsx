import { useRef, useState } from "react";
import EventMarker from "./EventMarker";
import { EventData } from "../types/EventData";

interface TimelineProps {
  events: EventData[];
  onSelect: (event: EventData) => void;
}

function Timeline({ events, onSelect }: TimelineProps) {
  const markerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") {
      const next = (idx + 1) % events.length;
      setActiveIndex(next);
      onSelect(events[next]);
      markerRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prev = (idx - 1 + events.length) % events.length;
      setActiveIndex(prev);
      onSelect(events[prev]);
      markerRefs.current[prev]?.focus();
    }
  };

  return (
    <div className="timeline">
      {events.map((event, idx) => (
        <EventMarker
          key={event.year}
          event={event}
          isActive={idx === activeIndex}
          onClick={() => {
            setActiveIndex(idx);
            onSelect(event);
          }}
          onKeyDown={(e) => handleKey(e, idx)}
          ref={(el) => {
            markerRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}

export default Timeline;