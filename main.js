/* ============================================
   IRON & FLOW FITNESS — Main JS
   ============================================ */

(function () {
  'use strict';

  // --- Hamburger Nav ---
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
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
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Animated Stat Counters ---
  var statNums = document.querySelectorAll('.stat__num[data-count]');
  var countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    statNums.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1200;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(step);
    });
  }

  // Trigger counters when hero stats are visible
  if ('IntersectionObserver' in window && statNums.length > 0) {
    var statsSection = document.querySelector('.hero__stats');
    if (statsSection) {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      statsObserver.observe(statsSection);
    }
  } else {
    // Fallback
    animateCounters();
  }

  // --- Theme Toggle ---
  var themeToggle = document.getElementById('themeToggle');
  var html = document.documentElement;

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

  // --- Pricing Toggle (Monthly/Annual) ---
  var pricingSwitch = document.getElementById('pricingSwitch');
  if (pricingSwitch) {
    var toggleLabels = document.querySelectorAll('.pricing-toggle__label');
    var isAnnual = false;

    pricingSwitch.addEventListener('click', function () {
      isAnnual = !isAnnual;
      pricingSwitch.setAttribute('aria-checked', isAnnual ? 'true' : 'false');

      // Toggle active label styling
      toggleLabels.forEach(function (label) {
        var period = label.getAttribute('data-period');
        if ((period === 'annual' && isAnnual) || (period === 'monthly' && !isAnnual)) {
          label.classList.add('pricing-toggle__label--active');
        } else {
          label.classList.remove('pricing-toggle__label--active');
        }
      });

      // Update prices
      var cards = document.querySelectorAll('.pricing-card[data-monthly]');
      cards.forEach(function (card) {
        var price = isAnnual ? card.getAttribute('data-annual') : card.getAttribute('data-monthly');
        var amountEl = card.querySelector('.price-amount');
        if (amountEl) {
          amountEl.style.opacity = '0';
          setTimeout(function () {
            amountEl.textContent = price;
            amountEl.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // --- FAQ Accordion ---
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-item__q');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(function (other) {
        other.classList.remove('open');
        var otherBtn = other.querySelector('.faq-item__q');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- Contact Form ---
  function handleFormSubmit(e) {
    e.preventDefault();

    var currentForm = e.target;
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
        var newForm = document.getElementById('contactForm');
        if (newForm) {
          newForm.addEventListener('submit', handleFormSubmit);
        }
      }
    }, 4000);
  }

  var form = document.getElementById('contactForm');
  form.addEventListener('submit', handleFormSubmit);

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
