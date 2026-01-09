// =========================
// Imports
// =========================

import { initState } from './state.js';
import { renderApp } from './render.js';
import { bindEvents } from './events.js';

// =========================
// Application logic
// =========================

export function initApp() {
  document.addEventListener('DOMContentLoaded', () => {
    initState();
    renderApp();
    bindEvents();
  });
}