// =========================
// Imports
// =========================

import { loadStateFromStorage } from '../services/storage.js';

// =========================
// Application logic
// =========================

const state = {
  pages: [], 
  activePageId: null,
}

function initState() {
  const savedState = loadStateFromStorage();
  if (!savedState) return;

  state.pages = savedState.pages || [];
  state.activePageId = savedState.activePageId || null;
}

function getState() {
  return state;
}

function createPage({ parentId = null } = {}) {
  const newPage = {
    id: crypto.randomUUID(),
    parentId,
    title: crypto.randomUUID(), 
    content: ''
  }

  state.pages.push(newPage);
  setActivePage(newPage.id);
}

function setActivePage(pageId) {
  state.activePageId = pageId;
}

function getChildPages(parentId = null) {
  return state.pages.filter(page => page.parentId === parentId);
}

export { initState, getState, createPage, setActivePage, getChildPages };