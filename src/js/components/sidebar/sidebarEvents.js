// =========================
// Imports
// =========================

import { createPage, setActivePage } from "../../app/state.js";
import { renderApp } from "../../app/render.js";
import { saveStateToStorage } from "../../services/storage.js";

// =========================
// Application logic
// =========================

function bindSidebarEvents() {
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
  const navPageTree = document.querySelector('.navigation__page-tree');

  navPageTree.addEventListener('click', (e) => {
    const addSubpageBtn = e.target.closest('[data-action="create-subpage"]');
    const page = e.target.closest('[data-page-id]');
    if (!page) return; 

    if (addSubpageBtn) {
      const parentId = addSubpageBtn.dataset.parentId;

      createPage({ parentId });
      saveStateToStorage();
      renderApp();
      return;
    }

    if (page) {
      const pageId = page.dataset.pageId;

      setActivePage(pageId);
      saveStateToStorage();
      renderApp();
    }
  })
}

export { bindSidebarEvents };