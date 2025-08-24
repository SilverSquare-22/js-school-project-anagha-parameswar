# Accessibility Improvements

This project has been updated to meet **WCAG 2.1 AA accessibility guidelines**, ensuring the application is usable for people with disabilities.

---

## Modal (Event Details)
- Uses `role="dialog"` with `aria-modal="true` for screen readers.  
- Each modal is labeled by its event heading (`aria-labelledby="modal-title"`).  
- Focus is **trapped inside** the modal while open.  
- Modal can be closed with **Esc key** or by clicking outside.  
- When the modal closes, focus is returned to the **triggering timeline marker**.  

---

## Timeline
- Timeline markers are interactive `<button>` elements.  
- The **active marker** is indicated with `aria-current="true"`.  
- Each marker has a descriptive `aria-label` (e.g., `Event in 1980: IBM PC`).  
- Markers are keyboard-accessible:  
  - **Tab** moves through markers in order.  
  - **Arrow keys (← / →)** cycle between markers.  

---

## Keyboard Navigation
- All interactive elements (markers, modal close button, theme toggle) are reachable via **Tab**.  
- **Escape** closes the modal.  
- Focus returns to the triggering element after modal close.  

---

## Colour Contrast
- Verified that text/background combinations meet **WCAG AA (≥4.5:1)**.  
- Adjusted **timeline marker text color** to improve readability.  
- Active states are distinguished by both **color and font weight**, not color alone.  

---

## Other WCAG Considerations
- Images (e.g., logo) include `alt` text.  
- Supports **text resizing** with relative units (`rem`, `%`).  
- Respects **prefers-reduced-motion** for users who disable animations.  
- Light and dark themes provide sufficient contrast in both modes.  

---

✅ With these changes, the app is **keyboard accessible, screen-reader friendly, and meets contrast requirements**.  
