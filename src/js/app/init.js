// =========================
// Imports
// =========================

import { loadState } from './state.js';
import { renderApp } from './render.js';
import { bindEvents } from './events.js';

// =========================
// Application logic
// =========================

export function initApp() {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
    loadState();
    renderApp();
    bindEvents();
  });
}