// =========================
// Imports
// =========================

import { bindGlobalEvents } from "../components/global/globalEvents.js";
import { bindHeaderEvents } from "../components/header/headerEvents.js";
import { bindSidebarEvents } from "../components/sidebar/sidebarEvents.js";
import { bindEditorEvents } from "../components/editor/editorEvents.js";

// =========================
// Application logic
// =========================

function bindEvents() {
  bindGlobalEvents();
  bindHeaderEvents();
  bindSidebarEvents();
  bindEditorEvents();
}

export { bindEvents };