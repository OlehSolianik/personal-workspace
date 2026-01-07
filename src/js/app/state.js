// =========================
// Imports
// =========================

import { loadStateFromStorage } from '../services/storage.js';

// =========================
// Application logic
// =========================

function loadState() {
  const saved = loadStateFromStorage();
  if (!saved) return;

  state.pages = saved.pages || [];
  state.activePageId = saved.activePageId || null;
}

const state = {
  pages: [],
  activePageId: null,
}

function getState() {
  return state;
}

function createPage() {
  const newPage = {
    id: crypto.randomUUID(),
    title: 'Untitled', 
    content: ''
  }

  state.pages.push(newPage);
  state.activePageId = newPage.id;
}

export { loadState, getState, createPage };