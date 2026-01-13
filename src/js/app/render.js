// =========================
// Imports
// =========================

import { renderGlobalComponents } from "../components/global/renderGlobalComponents.js";
import { renderHeader } from "../components/header/renderHeader.js";
import { renderSidebar } from "../components/sidebar/renderSidebar.js";
import { renderEditor } from "../components/editor/renderEditor.js";

// =========================
// Application logic
// =========================

function renderApp() {
  renderGlobalComponents();
  renderHeader();
  renderSidebar();
  renderEditor();
}

export { renderApp };