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

const layoutSplitter = document.querySelector('[data-action="split-layout"]');

function getMaxLeftPaneWidth() {
  return window.innerWidth * 0.8;
}

function clamp(min, value, max) {
  return Math.min(Math.max(value, min), max);
}

const root = document.documentElement;

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
    const newWidth = clamp(minLeftPaneWidth, rawWidth, getMaxLeftPaneWidth());

    if (newWidth === getMaxLeftPaneWidth()) {
      document.body.classList.add('is-overflowing-max');
    } else {
      document.body.classList.remove('is-overflowing-max');
    }

    root.style.setProperty('--sidebar-width', `${newWidth}px`);
    root.style.setProperty('--header-width', `${newWidth}px`);

    getState().leftPaneWidth = newWidth;
  }

  function handleMouseUp() {
    isDragging = false; 
    document.body.classList.remove("non-selectable");
    document.removeEventListener('mousemove', handleMouseMove); 
    document.removeEventListener('mouseup', handleMouseUp);
    saveStateToStorage();
  }
}

export { bindLayoutSplitter };