/* ============================================
   IRON & FLOW FITNESS — Main JS
   ============================================ */

(function () {
  'use strict';

  // --- Hamburger Nav ---
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // --- Scroll Fade-In (Intersection Observer) ---
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Theme Toggle ---
  var themeToggle = document.getElementById('themeToggle');
  var html = document.documentElement;

  // Check saved preference
  var savedTheme = localStorage.getItem('if-theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  }

  themeToggle.addEventListener('click', function () {
    var current = html.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('if-theme', next);
  });

  // --- Contact Form ---
  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple validation visual
    var inputs = form.querySelectorAll('[required]');
    var valid = true;
    inputs.forEach(function (input) {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = '#e74c3c';
      } else {
        input.style.borderColor = '';
      }
    });

    if (!valid) return;

    // Show success state
    var wrap = form.parentElement;
    var formHTML = form.outerHTML;
    form.outerHTML = '<div class="form-success">' +
      '<h3>You\'re In!</h3>' +
      '<p>We\'ll reach out within 24 hours to book your free class. Get ready to sweat.</p>' +
      '</div>';

    // Reset after 4 seconds
    setTimeout(function () {
      var success = wrap.querySelector('.form-success');
      if (success) {
        success.outerHTML = formHTML;
        // Re-bind form
        var newForm = document.getElementById('contactForm');
        if (newForm) {
          newForm.addEventListener('submit', arguments.callee);
        }
      }
    }, 4000);
  });

  // --- Nav background on scroll ---
  var nav = document.getElementById('nav');
  var scrolled = false;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60 && !scrolled) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      scrolled = true;
    } else if (window.scrollY <= 60 && scrolled) {
      nav.style.boxShadow = 'none';
      scrolled = false;
    }
  }, { passive: true });

})();
