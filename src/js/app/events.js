// =========================
// Imports
// =========================

import { createPage } from "./state.js";
import { saveStateToStorage } from "../services/storage.js";
import { renderApp } from "./render.js";

// =========================
// Application logic
// =========================

function bindEvents() {
  const createPageBtn = document.querySelector('[data-action="create-page"]');

  createPageBtn.addEventListener('click', ()=> {
    createPage();
    saveStateToStorage();
    renderApp();
  });
}

export { bindEvents };