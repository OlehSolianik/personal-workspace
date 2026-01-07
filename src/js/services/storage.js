// =========================
// Imports
// =========================

import { getState } from '../app/state.js';

// =========================
// Application logic
// =========================

const STORAGE_KEY = 'personal-workspace';

function saveStateToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getState()));
}

function loadStateFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

export { saveStateToStorage, loadStateFromStorage };