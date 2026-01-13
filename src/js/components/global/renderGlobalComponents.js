// =========================
// Imports
// =========================

import { getState } from "../../app/state.js";

// =========================
// Application logic
// =========================

function renderGlobalComponents() {
  renderSidebarToggle();
}

function renderSidebarToggle() {
  const appSidebar = document.querySelector('.app__sidebar'); 
  const headerControls = document.querySelector('.header__controls');

  appSidebar.classList.toggle('is-collapsed', getState().leftPanelIsCollapsed);
  headerControls.classList.toggle('is-collapsed', getState().leftPanelIsCollapsed);
}

export { renderGlobalComponents };