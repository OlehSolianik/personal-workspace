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
  sidebarIsCollapsed: false,
}

function initState() {
  const savedState = loadStateFromStorage();
  if (!savedState) return;

  state.pages = savedState.pages || [];
  state.activePageId = savedState.activePageId || null;
  state.sidebarIsCollapsed = savedState.sidebarIsCollapsed || false;
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

function getPagePath(pageId) {
  const { pages } = getState();
  const path = [];
  let currentPage = pages.find(page => page.id === pageId);

  while (currentPage) {
    path.unshift(currentPage); 
    currentPage = currentPage.parentId
      ? pages.find(page => page.id === currentPage.parentId)
      : null;
  }

  return path;  
}

function toggleSidebar() {
  getState().sidebarIsCollapsed = !getState().sidebarIsCollapsed;
}

export { initState, getState, createPage, setActivePage, getChildPages, getPagePath, toggleSidebar };