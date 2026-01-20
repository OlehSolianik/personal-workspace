// =========================
// Imports
// =========================

import { getState } from "../../../app/state.js";
import { saveStateToStorage } from "../../../services/storage.js";

// =========================
// Application logic
// =========================

const rootElement = document.documentElement;
const layoutSplitter = document.querySelector('[data-action="split-layout"]');
const minLeftPaneWidth = 0;
const leftPaneCollapseThreshold = window.innerWidth * 0.1;
const dragDistanceBeforeCollapse = 60;
let userIsDraggingSplitter = false;

let collapseIntentDistance = 0;
function clamp(min, value, max) {
  return Math.min(Math.max(value, min), max);
}

function getMaxLeftPaneWidth() {
  return window.innerWidth * 0.8;
}

function collapseLeftPane() {
  const state = getState();

  state.leftPaneIsCollapsed = true;

  rootElement.style.setProperty('--left-pane-width', `0px`);

  document.body.classList.add('left-pane-collapsed');
  document.body.classList.remove('is-collapse-intent');
  layoutSplitter.classList.add('elem-is-collapsed');

  saveStateToStorage();
}

function expandLeftPane() {
  const state = getState();
  state.leftPaneIsCollapsed = false;

  const width = state.lastExpandedLeftPaneWidth || window.innerWidth * 0.2;
  state.leftPaneWidth = width;

  const root = document.documentElement;
  root.style.setProperty('--left-pane-width', `${width}px`);
}

function handleMouseMove(e) {
  if (!userIsDraggingSplitter) return;

  const rawLeftPaneWidth = e.clientX;
  const leftPaneWidth = clamp(minLeftPaneWidth, rawLeftPaneWidth, getMaxLeftPaneWidth());

  if(getState().leftPaneIsCollapsed) return;

  if (leftPaneWidth > leftPaneCollapseThreshold) {
    collapseIntentDistance = 0;

    if (leftPaneWidth !== getMaxLeftPaneWidth()) {
      document.body.classList.remove('overflowing-max-value');
    } else {
      document.body.classList.add('overflowing-max-value');
    }

    rootElement.style.setProperty('--left-pane-width', `${leftPaneWidth}px`);

    getState().leftPaneWidth = leftPaneWidth;
    getState().lastExpandedLeftPaneWidth = leftPaneWidth;

    document.body.classList.remove('is-collapse-intent');
    return;
  }

  rootElement.style.setProperty('--left-pane-width', `${leftPaneCollapseThreshold}px`);

  collapseIntentDistance += Math.abs(e.movementX);
  if (collapseIntentDistance > dragDistanceBeforeCollapse) {
    collapseLeftPane();
  }
}

function handleMouseUp() {
  userIsDraggingSplitter = false;
  document.body.classList.remove('non-selectable-content');
  document.removeEventListener('mousemove', handleMouseMove); 
  document.removeEventListener('mouseup', handleMouseUp);
  saveStateToStorage();
}

function bindLayoutSplitter() {
  layoutSplitter.addEventListener('mousedown', () => {
    userIsDraggingSplitter = true; 
    document.body.classList.add('non-selectable-content');
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  });
}

export { bindLayoutSplitter };