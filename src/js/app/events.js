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
    const addSubpageButton = e.target.closest('[data-action="add-subpage"]');
    const pageItem = e.target.closest('[data-page-id]');
    if (!pageItem) return; 

    if (addSubpageButton) {
      const parentId = addSubpageButton.dataset.parentId;

      createPage({ parentId });
      saveStateToStorage();
      renderApp();
      return;
    }

    // Activate page
    if (pageItem) {
      const pageId = pageItem.dataset.pageId;

      setActivePage(pageId);
      saveStateToStorage();
      renderApp();
    }
  })
}

export { bindEvents };