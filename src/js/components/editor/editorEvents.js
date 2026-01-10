// =========================
// Imports
// =========================

import { setActivePage } from "../../app/state.js";
import { renderApp } from "../../app/render.js";

// =========================
// Application logic
// =========================

function bindEditorEvents() {
  bindBreadcrumbEvents();
}

function bindBreadcrumbEvents() {
 const editorHeader = document.querySelector('.editor__header');

 editorHeader.addEventListener('click', (e) => {
  if (e.target.matches('.breadcrumb__item')) {
    const pageId = e.target.dataset.pageId; 
    setActivePage(pageId);
    renderApp();
  }
 });
}

export { bindEditorEvents };