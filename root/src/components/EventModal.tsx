import ReactDOM from "react-dom";
import { EventData } from "../types/EventData";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 id="modal-title">
          {event.year} - {event.title}
        </h3>
        <p>{event.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default EventModal;
