// =========================
// Imports
// =========================

import { getState } from "../../app/state.js";

// =========================
// Application logic
// =========================

function renderHeader() {
  renderHeaderControls();
}

function renderHeaderControls() {
  const appSidebar = document.querySelector('.app__sidebar'); 

  appSidebar.classList.toggle('app__sidebar--collapsed', getState().sidebarIsCollapsed);
}

export { renderHeader, renderHeaderControls };