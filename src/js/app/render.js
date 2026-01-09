// =========================
// Imports
// =========================

import { renderSidebar } from "../components/sidebar/renderSidebar.js";
import { renderEditor } from "../components/editor/renderEditor.js";

// =========================
// Application logic
// =========================

function renderApp() {
  renderSidebar();
  renderEditor();
}

export { renderApp };