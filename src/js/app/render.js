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
  const sidebarNav = document.querySelector('.sidebar__nav');

  sidebarNav.innerHTML = pages.map(page => 
    `
    <div class="nav__page ${page.id === activePageId ? 'nav__page--active' : ''}" data-id="${page.id}">
      ${page.title}
    </div>
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