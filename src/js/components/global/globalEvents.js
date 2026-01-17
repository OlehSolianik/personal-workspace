// =========================
// Imports
// =========================

import { bindSidebarToggle } from "./sidebarToggle/sidebarToggle.js";
import { bindLayoutSplitter } from "./layoutSplitter/layoutSplitter.js";

// =========================
// Application logic
// =========================

function bindGlobalEvents() {
  bindSidebarToggle();
  bindLayoutSplitter();
}


export { bindGlobalEvents };