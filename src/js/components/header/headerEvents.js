// =========================
// Imports
// =========================

import { toggleSidebar } from "../../app/state.js";
import { renderApp } from "../../app/render.js";
import { saveStateToStorage } from "../../services/storage.js";

// =========================
// Application logic
// =========================

function bindHeaderEvents() {
  bindSidebarToggle();
}

function bindSidebarToggle() {
  const sidebarToggleBtn = document.querySelector('.sidebar__toggle'); 
  
  sidebarToggleBtn.addEventListener('click', () => {
    toggleSidebar();
    renderApp();
    saveStateToStorage();
  });
}

export { bindHeaderEvents };