import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { EventData } from "../types/EventData";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocusedElement.current = document.activeElement as HTMLElement;

    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      lastFocusedElement.current?.focus();
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="modal-title">
          {event.year} - {event.title}
        </h3>
        <p>{event.description}</p>
        <button ref={closeButtonRef} onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default EventModal;