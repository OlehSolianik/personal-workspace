// =========================
// Imports
// =========================

import { getState } from "./state.js";

// =========================
// Application logic
// =========================

function renderApp() {
  renderSidebar();
  renderEditor();
}

function renderSidebar() {
  const { pages, activePageId } = getState();
  const navPageList = document.querySelector('.nav__page-list');

  navPageList.innerHTML = pages.map(page => 
    `
    <li class="page-list__item ${page.id === activePageId ? 'page-list__item--active' : ''}" data-page-id="${page.id}">
      ${page.title}
    </li>
    `
  ).join('');
}

function renderEditor() {
  const { pages, activePageId } = getState();
  const editorContent = document.querySelector('.editor__content');

  const activePage = pages.find(page => page.id === activePageId);
  editorContent.innerHTML = activePage ? `<h1>${activePage.title}</h1>` : '';
}

export { renderApp };