// =========================
// Imports
// =========================

import { bindHeaderEvents } from "../components/header/headerEvents.js";
import { bindSidebarEvents } from "../components/sidebar/sidebarEvents.js";
import { bindEditorEvents } from "../components/editor/editorEvents.js";

// =========================
// Application logic
// =========================

function bindEvents() {
  bindHeaderEvents();
  bindSidebarEvents();
  bindEditorEvents();
}

export { bindEvents };