// =========================
// Imports
// =========================

import { getState } from "../../app/state.js";

// =========================
// Application logic
// =========================

function renderEditor() {
  const { pages, activePageId } = getState();
  const editorContent = document.querySelector('.editor__content');

  const activePage = pages.find(page => page.id === activePageId);
  editorContent.innerHTML = activePage ? `<h1>${activePage.title}</h1>` : '';
}

export { renderEditor };