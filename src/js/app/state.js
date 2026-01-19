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
  leftPaneIsCollapsed: false,
  leftPaneWidth: window.innerWidth * 0.2,
}

function initState() {
  const savedState = loadStateFromStorage();
  if (!savedState) return;

  state.pages = savedState.pages || [];
  state.activePageId = savedState.activePageId || null;
  state.leftPaneIsCollapsed = savedState.leftPaneIsCollapsed || false;
  state.leftPaneWidth = savedState.leftPaneWidth ?? window.innerWidth * 0.2;
}

function applyLeftPaneWidth() {
  const root = document.documentElement;
  const { leftPaneWidth } = getState();
  root.style.setProperty('--sidebar-width', `${leftPaneWidth}px`);
  root.style.setProperty('--header-width', `${leftPaneWidth}px`);
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

function toggleLeftPane() {
  getState().leftPaneIsCollapsed = !getState().leftPaneIsCollapsed;
}

export { initState, applyLeftPaneWidth, getState, createPage, setActivePage, getChildPages, getPagePath, toggleLeftPane };