// Nav burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if(burger && navLinks){
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Reveal observer (shared)
window.observer = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if(en.isIntersecting){
      en.target.classList.add('in');
      if(en.target.classList.contains('stat')){
        const numEl = en.target.querySelector('.num');
        if(numEl && numEl.dataset.num && !numEl.dataset.done){
          numEl.dataset.done = '1';
          const target = +numEl.dataset.num;
          const suffix = numEl.dataset.suffix || '';
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start)/1400);
            const ease = 1 - Math.pow(1 - p, 3);
            numEl.textContent = Math.round(target * ease) + suffix;
            if(p < 1) requestAnimationFrame(tick);
            else numEl.textContent = target + suffix;
          };
          requestAnimationFrame(tick);
        }
      }
    }
  });
}, {threshold:0.15});

document.querySelectorAll('.reveal').forEach(el => window.observer.observe(el));
