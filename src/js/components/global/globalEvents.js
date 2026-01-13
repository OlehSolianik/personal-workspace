// =========================
// Imports
// =========================

import { toggleLeftPanel } from "../../app/state.js";
import { renderApp } from "../../app/render.js";
import { saveStateToStorage } from "../../services/storage.js";

// =========================
// Application logic
// =========================

function bindGlobalEvents() {
  bindSidebarToggle();
}

function bindSidebarToggle() {
  const sidebarToggleBtn = document.querySelector('.sidebar__toggle'); 
  
  sidebarToggleBtn.addEventListener('click', () => {
    toggleLeftPanel();
    renderApp();
    saveStateToStorage();
  });
}

export { bindGlobalEvents };