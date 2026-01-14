// =========================
// Imports
// =========================

import { toggleLeftPane } from "../../app/state.js";
import { renderApp } from "../../app/render.js";
import { saveStateToStorage } from "../../services/storage.js";

// =========================
// Application logic
// =========================

function bindGlobalEvents() {
  bindSidebarToggle();
}

function bindSidebarToggle() {
  const toggleLeftPaneBtn = document.querySelector('[data-action="toggle-left-pane"]'); 
  
  toggleLeftPaneBtn.addEventListener('click', () => {
    toggleLeftPane();
    renderApp();
    saveStateToStorage();
  });
}

export { bindGlobalEvents };