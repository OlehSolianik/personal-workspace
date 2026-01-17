let isDragging = false;

const layoutSplitter = document.querySelector('[data-action="split-layout"]');

function bindLayoutSplitter() {

  layoutSplitter.addEventListener('mousedown', () => {
    isDragging = true; 
    document.body.classList.add("non-selectable");

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  });

  function handleMouseMove(e) {
    if (!isDragging) return;

    const newWidth = e.clientX;
    const root = document.documentElement;

    root.style.setProperty('--sidebar-width', `${newWidth}px`);
    root.style.setProperty('--header-width', `${newWidth}px`);
  }

  function handleMouseUp() {
    isDragging = false; 
    document.body.classList.remove("non-selectable");
    document.removeEventListener('mousemove', handleMouseMove); 
    document.removeEventListener('mouseup', handleMouseUp);
  }
}

export { bindLayoutSplitter };