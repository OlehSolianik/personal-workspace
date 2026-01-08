// =========================
// Imports
// =========================

import { createPage, setActivePage } from "./state.js";
import { saveStateToStorage } from "../services/storage.js";
import { renderApp } from "./render.js";

// =========================
// Application logic
// =========================

function bindEvents() {
  bindCreatePage();
  bindSwitchPages();
}

function bindCreatePage() {
  const createPageBtn = document.querySelector('[data-action="create-page"]');

  createPageBtn.addEventListener('click', () => {
    createPage();
    saveStateToStorage();
    renderApp();
  });
}

function bindSwitchPages() {
  const navPageList = document.querySelector('.nav__page-list');

  navPageList.addEventListener('click', (e) => {
    const item = e.target.closest('[data-page-id]');
    if (!item) return; 

    const pageId = item.dataset.pageId; 

    setActivePage(pageId); 
    saveStateToStorage();
    renderApp();
  })
}

export { bindEvents };