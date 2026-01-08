// =========================
// Imports
// =========================

import { getState, getChildPages } from "./state.js";

// =========================
// Application logic
// =========================

function renderApp() {
  renderSidebar();
  renderEditor();
}

function renderSidebar() {
  const navPageList = document.querySelector('.nav__page-list');
  navPageList.innerHTML = renderPageTree(); 
}

function renderPageTree(parentId = null, level = 0) {
  const pages = getChildPages(parentId);

  return pages.map(page => 
    `
    <li 
      class="page-list__item ${page.id === getState().activePageId ? 'page-list__item--active' : ''}" 
      data-page-id="${page.id}"
      style="padding-left: ${level * 16}px"
    >
      <span class="page-list__title">${page.title}</span>
      <button
        class="page-list__add-page"
        data-action="add-subpage"
        data-parent-id="${page.id}"
      >
        +
      </button>
    </li>
    ${renderPageTree(page.id, level + 1)}
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