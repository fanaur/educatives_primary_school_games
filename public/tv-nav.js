/*
 * Navegación espacial por control remoto (D-pad) para Android TV.
 * La mayoría de los WebView de Android TV ya traducen DPAD_UP/DOWN/LEFT/RIGHT
 * en eventos de teclado (ArrowUp/Down/Left/Right) + Enter, pero el foco por
 * defecto del navegador sigue el orden del DOM, no la posición en pantalla.
 * Esto mueve el foco al elemento focuseable más cercano en la dirección
 * presionada, y marca <body> para aplicar el modo TV (ver tv-nav.css).
 */
(function () {
  document.body.classList.add('tv-mode');

  function focusables() {
    return Array.from(document.querySelectorAll('a.category-card, a.game-card, a.back-btn'));
  }

  // Usa el rectángulo de layout (offsetLeft/Top), no getBoundingClientRect:
  // el foco aplica transform (translateY/scale) al elemento activo, y eso
  // distorsionaría su propia posición "visual" al calcular distancias.
  function center(el) {
    let x = el.offsetWidth / 2;
    let y = el.offsetHeight / 2;
    let node = el;
    while (node) {
      x += node.offsetLeft - node.scrollLeft;
      y += node.offsetTop - node.scrollTop;
      node = node.offsetParent;
    }
    return { x, y };
  }

  function moveFocus(dir) {
    const items = focusables();
    const active = document.activeElement;
    if (!items.includes(active)) {
      (items[0] || {}).focus && items[0].focus();
      return;
    }
    const from = center(active);
    let best = null;
    let bestScore = Infinity;

    for (const el of items) {
      if (el === active) continue;
      const to = center(el);
      const dx = to.x - from.x;
      const dy = to.y - from.y;

      let aligned, main, cross;
      if (dir === 'left' || dir === 'right') {
        aligned = dir === 'right' ? dx > 1 : dx < -1;
        main = Math.abs(dx);
        cross = Math.abs(dy);
      } else {
        aligned = dir === 'down' ? dy > 1 : dy < -1;
        main = Math.abs(dy);
        cross = Math.abs(dx);
      }
      if (!aligned) continue;

      const score = main + cross * 2.2;
      if (score < bestScore) {
        bestScore = score;
        best = el;
      }
    }

    if (best) best.focus();
  }

  const KEY_DIR = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  };

  document.addEventListener('keydown', (e) => {
    const dir = KEY_DIR[e.key];
    if (!dir) return;
    e.preventDefault();
    moveFocus(dir);
  });

  window.addEventListener('DOMContentLoaded', () => {
    const items = focusables();
    if (items.length) items[0].focus();
  });
})();
