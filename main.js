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
  function handleFormSubmit(e) {
    e.preventDefault();

    var currentForm = e.target;
    // Simple validation visual
    var inputs = currentForm.querySelectorAll('[required]');
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
    var wrap = currentForm.parentElement;
    var formHTML = currentForm.outerHTML;
    currentForm.outerHTML = '<div class="form-success">' +
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
          newForm.addEventListener('submit', handleFormSubmit);
        }
      }
    }, 4000);
  }

  var form = document.getElementById('contactForm');
  form.addEventListener('submit', handleFormSubmit);

  // --- Nav background on scroll + Active section highlight ---
  var nav = document.getElementById('nav');
  var scrolled = false;
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = navLinks.querySelectorAll('a[href^="#"]');

  function updateActiveNav() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(function (a) {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60 && !scrolled) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      scrolled = true;
    } else if (window.scrollY <= 60 && scrolled) {
      nav.style.boxShadow = 'none';
      scrolled = false;
    }
    updateActiveNav();
  }, { passive: true });

})();
