// =========================
// Imports
// =========================

import { bindSidebarEvents } from "../components/sidebar/sidebarEvents.js";
import { bindEditorEvents } from "../components/editor/editorEvents.js";

// =========================
// Application logic
// =========================

function bindEvents() {
  bindSidebarEvents();
  bindEditorEvents();
}

export { bindEvents };