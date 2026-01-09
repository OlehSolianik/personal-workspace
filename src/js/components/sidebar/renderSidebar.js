// =========================
// Imports
// =========================

import { getState, getChildPages } from "../../app/state.js";

// =========================
// Application logic
// =========================

function renderSidebar() {
  const navPageTree = document.querySelector('.navigation__page-tree');
  navPageTree.innerHTML = renderPageTree(); 
}

function renderPageTree(parentId = null, level = 0) {
  const pages = getChildPages(parentId);

  return pages.map(page => 
    `
    <li 
      class="page-tree__item ${page.id === getState().activePageId ? 'page-tree__item--active' : ''}" 
      data-page-id="${page.id}"
      style="padding-left: ${level * 16}px"
    >
      <span class="page-tree-item__title">${page.title}</span>
      <button
        class="page-tree-item__add-subpage"
        data-action="create-subpage"
        data-parent-id="${page.id}"
      >
        +
      </button>
    </li>
    ${renderPageTree(page.id, level + 1)}
    `
  ).join('');
}

export { renderSidebar };