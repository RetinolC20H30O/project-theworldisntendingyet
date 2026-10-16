(function () {
  var DURATION = 670; //ms
  var preloader = document.getElementById('preloader');
  var bar = preloader.querySelector('.bar');
  var pct = preloader.querySelector('.pct');
  var start = performance.now();

  document.body.style.overflow = 'hidden';

  (function tick(now) {
    var t = Math.min((now - start) / DURATION, 1);
    bar.style.width = t * 100 + '%';
    pct.textContent = Math.round(t * 100) + '%';
    if (t < 1) return requestAnimationFrame(tick);

    preloader.classList.add('hide');
    setTimeout(function () {
      preloader.remove();
      document.body.style.overflow = '';
    }, 600);
  })(start);
})();