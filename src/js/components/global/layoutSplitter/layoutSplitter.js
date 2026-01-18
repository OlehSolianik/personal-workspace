// =========================
// Imports
// =========================

import { getState } from "../../../app/state.js";
import { saveStateToStorage } from "../../../services/storage.js";

// =========================
// Application logic
// =========================

let isDragging = false;

const minLeftPaneWidth = 0;
const maxLeftPaneWidth = window.innerWidth * 0.8;

const layoutSplitter = document.querySelector('[data-action="split-layout"]');

function clamp(min, value, max) {
  return Math.min(Math.max(value, min), max);
}

const root = document.documentElement;

root.style.setProperty('--sidebar-width', `${getState().leftPaneWidth}px`);

function bindLayoutSplitter() {

  layoutSplitter.addEventListener('mousedown', () => {
    isDragging = true; 
    document.body.classList.add("non-selectable");

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  });

  function handleMouseMove(e) {
    if (!isDragging) return;

    const rawWidth = e.clientX;
    const newWidth = clamp(minLeftPaneWidth, rawWidth, maxLeftPaneWidth);

    if (newWidth === maxLeftPaneWidth) {
      document.body.classList.add('is-overflowing-max');
    } else {
      document.body.classList.remove('is-overflowing-max');
    }

    root.style.setProperty('--sidebar-width', `${newWidth}px`);
    root.style.setProperty('--header-width', `${newWidth}px`);

    getState().leftPaneWidth = newWidth;
    saveStateToStorage();
  }

  function handleMouseUp() {
    isDragging = false; 
    document.body.classList.remove("non-selectable");
    document.removeEventListener('mousemove', handleMouseMove); 
    document.removeEventListener('mouseup', handleMouseUp);
  }
}

export { bindLayoutSplitter };