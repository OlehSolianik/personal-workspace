// =========================
// Imports
// =========================

import { getState, getPagePath } from "../../app/state.js";

// =========================
// Application logic
// =========================

function renderEditor() {
  renderEditorHeader();
  renderEditorContent();
}

function renderEditorHeader() {
  const editorHeader = document.querySelector('.editor__header');
  const { activePageId } = getState();

  if(!activePageId) {
    editorHeader.innerHTML = '';
    return;
  }

  const pagePath = getPagePath(activePageId);
  editorHeader.innerHTML = pagePath.map((page, index) => 
  `
  <span class="breadcrumb__item" data-page-id="${page.id}">
    ${page.title}
  <span>
  ${index < pagePath.length - 1 ? '/' : ''}
  `).join('');
}

function renderEditorContent() {
  const { pages, activePageId } = getState();
  const editorContent = document.querySelector('.editor__content');

  const activePage = pages.find(page => page.id === activePageId);
  editorContent.innerHTML = activePage ? `<h1>${activePage.title}</h1>` : '';
}

export { renderEditor };