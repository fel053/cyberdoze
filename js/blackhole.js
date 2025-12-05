// js/blackhole.js
// Minimal: añade la clase `absorbing` al body cuando el usuario hace hover sobre el wrapper,
// y realiza un scroll real hacia arriba sincronizado con la duración CSS.

(function(){
  const WRAPPER = document.querySelector('.c-blackhole__wrapper');
  if(!WRAPPER) return;

  // Duración (en ms) — debe coincidir con --collapse-duration
  const DURATION = 10000;

  let running = false;
  let rafId = null;
  let startTime = null;
  let startScroll = 0;
  let targetScroll = 0;

  function animateScrollToTop(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(1, elapsed / DURATION);
    // easing (slow in, faster out)
    const eased = 1 - Math.pow(1 - progress, 3);
    const newPos = startScroll + (targetScroll - startScroll) * eased;
    window.scrollTo(0, newPos);
    if (progress < 1) {
      rafId = requestAnimationFrame(animateScrollToTop);
    } else {
      running = false;
      startTime = null;
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function startAbsorb() {
    if (running) return;
    running = true;

    // add class to body to trigger CSS animations
    document.body.classList.add('absorbing');

    // prepare scroll animation: scroll toward top (0) or slightly above current
    startScroll = window.scrollY || window.pageYOffset || 0;
    targetScroll = 0; // puedes ajustar a otro valor si prefieres (ej. hacia el top)

    // kick off RAF
    startTime = null;
    rafId = requestAnimationFrame(animateScrollToTop);
  }

  function stopAbsorb() {
    // Si quieres que la animación se detenga al sacar el mouse, descomenta:
    // document.body.classList.remove('absorbing');
    // if (rafId) cancelAnimationFrame(rafId);
    // running = false;
  }

  // start on mouseenter, don't remove on leave (permanece colapsado)
  WRAPPER.addEventListener('mouseenter', startAbsorb, {passive: true});
  // if you want to allow hover-out to cancel: WRAPPER.addEventListener('mouseleave', stopAbsorb);
})();
