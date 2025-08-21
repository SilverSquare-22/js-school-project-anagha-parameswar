import ReactDOM from "react-dom";
import { EventData } from "../types/EventData";

interface EventModalProps {
    event: EventData;
    onClose: () => void;
}

function EventModal ({ event, onClose }: EventModalProps) {
    return ReactDOM.createPortal (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick= {(e) => e.stopPropagation ()}>
                <h3>{event.year} - {event.title}</h3>
                <p>{event.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    )
}

export default EventModal;