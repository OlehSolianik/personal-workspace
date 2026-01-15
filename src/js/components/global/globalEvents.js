// =========================
// Imports
// =========================

import { bindSidebarToggle } from "./sidebarToggle/sidebarToggle.js";

// =========================
// Application logic
// =========================

function bindGlobalEvents() {
  bindSidebarToggle();
}


export { bindGlobalEvents };