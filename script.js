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

var dialog = document.getElementById('mail-dialog');
var agree = document.getElementById('mail-agree');
var timer;

function lockAgree(seconds) {
  clearInterval(timer);
  agree.disabled = true;
  agree.textContent = 'Agree (' + seconds + ')';

  timer = setInterval(function () {
    seconds--;
    if (seconds > 0) {
      agree.textContent = 'Agree (' + seconds + ')';
    } else {
      clearInterval(timer);
      agree.disabled = false;
      agree.textContent = 'Agree';
    }
  }, 1000);
}

document.getElementById('mail-open').addEventListener('click', function (e) {
  e.preventDefault();
  dialog.showModal();
  lockAgree(5);
});

dialog.addEventListener('close', function () {
  clearInterval(timer);
});
document.getElementById('mail-cancel').addEventListener('click', function() {
  dialog.close();
})
document.getElementById('mail-agree').addEventListener('click', function() {
  dialog.close();
  window.location.href = 'mailto:hayasaka.minase@proton.me';
});
