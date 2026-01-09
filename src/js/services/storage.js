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
  const rawState = localStorage.getItem(STORAGE_KEY);
  return rawState ? JSON.parse(rawState) : null;
}

export { saveStateToStorage, loadStateFromStorage };