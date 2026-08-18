// nav background appears when you scroll down
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// sections fade up as they come into view
var fadeEls = document.querySelectorAll('.fade-up');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(function(el) {
  observer.observe(el);
});

// filter buttons inside the widget
var filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    var filter = btn.getAttribute('data-filter');
    var allItems = document.querySelectorAll('.widget-item');

    allItems.forEach(function(item) {
      if (filter === 'all' || item.getAttribute('data-type') === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// copy the embed code
var copyBtn = document.getElementById('copy-btn');
var copyLabel = document.getElementById('copy-label');
if (copyBtn) {
  copyBtn.addEventListener('click', function() {
    var code = '<script src="patchwork.io/w.js" data-id="your-slug"><\/script>';
    navigator.clipboard.writeText(code);
    copyLabel.textContent = 'Copied!';
    copyBtn.classList.add('copied');
    setTimeout(function() {
      copyLabel.textContent = 'Copy';
      copyBtn.classList.remove('copied');
    }, 2000);
  });
}

// email signup form
var signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var emailInput = document.getElementById('email-input');
    var val = emailInput.value.trim();
    if (!val || !val.includes('@')) {
      emailInput.classList.add('error');
      setTimeout(function() { emailInput.classList.remove('error'); }, 1800);
      return;
    }
    signupForm.innerHTML = '<p class="success-msg">✓ You are on the list. We will be in touch.</p>';
  });
}

// easter egg — hover the logo 5 times
var hoverCount = 0;
var logo = document.querySelector('.nav-logo');
if (logo) {
  logo.addEventListener('mouseenter', function() {
    hoverCount++;
    if (hoverCount >= 5) {
      hoverCount = 0;
      document.getElementById('egg-overlay').classList.add('active');
    }
  });
}

function closeEgg() {
  document.getElementById('egg-overlay').classList.remove('active');
}

var eggClose = document.getElementById('egg-close');
if (eggClose) eggClose.addEventListener('click', closeEgg);

document.getElementById('egg-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeEgg();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeEgg();
});
