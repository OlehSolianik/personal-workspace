// =========================
// Imports
// =========================

import { getState, toggleLeftPane } from "../../../app/state.js";
import { renderApp } from "../../../app/render.js";
import { saveStateToStorage } from "../../../services/storage.js";

// =========================
// Application logic
// =========================

function renderSidebarToggle() {
  const appSidebar = document.querySelector('.app__sidebar'); 
  const headerControls = document.querySelector('.header__controls');
  const layoutSplitter = document.querySelector('.layout-splitter');

  appSidebar.classList.toggle('is-collapsed', getState().leftPaneIsCollapsed);
  headerControls.classList.toggle('is-collapsed', getState().leftPaneIsCollapsed);
  layoutSplitter.classList.toggle('is-collapsed', getState().leftPaneIsCollapsed);
}

function bindSidebarToggle() {
  const toggleLeftPaneBtn = document.querySelector('[data-action="toggle-left-pane"]'); 
  
  toggleLeftPaneBtn.addEventListener('click', () => {
    toggleLeftPane();
    renderApp();
    saveStateToStorage();
  });
}

export { renderSidebarToggle, bindSidebarToggle };