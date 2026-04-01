/* ============================================
   IRON & FLOW FITNESS — Main JS
   ============================================ */

(function () {
  'use strict';

  // --- Hamburger Nav + Backdrop (tap outside to close) ---
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');

  // Create backdrop for tap-outside-to-close
  var backdrop = document.createElement('div');
  backdrop.className = 'nav__backdrop';
  document.body.appendChild(backdrop);

  function closeNav() {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
    backdrop.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    var isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeNav();
    } else {
      navLinks.classList.add('open');
      burger.classList.add('active');
      backdrop.classList.add('active');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  backdrop.addEventListener('click', closeNav);

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
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

      // Update prices and period text
      var cards = document.querySelectorAll('.pricing-card[data-monthly]');
      cards.forEach(function (card) {
        var price = isAnnual ? card.getAttribute('data-annual') : card.getAttribute('data-monthly');
        var amountEl = card.querySelector('.price-amount');
        var periodEl = card.querySelector('.price-period');
        if (amountEl) {
          amountEl.style.opacity = '0';
          setTimeout(function () {
            amountEl.textContent = price;
            amountEl.style.opacity = '1';
          }, 150);
        }
        if (periodEl) {
          periodEl.textContent = isAnnual ? '/yr' : '/mo';
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

    // Reset after 8 seconds (gives user time to read)
    setTimeout(function () {
      var success = wrap.querySelector('.form-success');
      if (success) {
        success.outerHTML = formHTML;
        var newForm = document.getElementById('contactForm');
        if (newForm) {
          newForm.addEventListener('submit', handleFormSubmit);
        }
      }
    }, 8000);
  }

  var form = document.getElementById('contactForm');
  form.addEventListener('submit', handleFormSubmit);

  // --- Newsletter Form ---
  function handleNewsletterSubmit(e) {
    e.preventDefault();

    var nlForm = e.target;
    var emailInput = nlForm.querySelector('input[type="email"]');
    if (!emailInput || !emailInput.value.trim()) {
      if (emailInput) emailInput.style.borderColor = '#e74c3c';
      return;
    }
    emailInput.style.borderColor = '';

    var wrap = nlForm.parentElement;
    var formHTML = nlForm.outerHTML;
    nlForm.outerHTML = '<div class="form-success form-success--sm">' +
      '<p><strong>You\'re subscribed!</strong> Class updates incoming.</p>' +
      '</div>';

    setTimeout(function () {
      var success = wrap.querySelector('.form-success--sm');
      if (success) {
        success.outerHTML = formHTML;
        var newNl = document.getElementById('newsletterForm');
        if (newNl) {
          newNl.addEventListener('submit', handleNewsletterSubmit);
        }
      }
    }, 5000);
  }

  var nlForm = document.getElementById('newsletterForm');
  if (nlForm) {
    nlForm.addEventListener('submit', handleNewsletterSubmit);
  }

  // --- Nav scroll shadow (class toggle, not inline style) ---
  var nav = document.getElementById('nav');
  var scrolled = false;

  // --- Sticky mobile CTA ---
  var stickyCta = document.getElementById('stickyCta');
  var heroSection = document.getElementById('hero');
  var contactSection = document.getElementById('contact');
  var stickyVisible = false;

  window.addEventListener('scroll', function () {
    // Nav shadow
    if (window.scrollY > 60 && !scrolled) {
      nav.classList.add('nav--scrolled');
      scrolled = true;
    } else if (window.scrollY <= 60 && scrolled) {
      nav.classList.remove('nav--scrolled');
      scrolled = false;
    }

    // Sticky CTA: show after hero, hide near contact
    if (stickyCta && heroSection && contactSection) {
      var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      var contactTop = contactSection.offsetTop - window.innerHeight * 0.5;
      var shouldShow = window.scrollY > heroBottom && window.scrollY < contactTop;

      if (shouldShow && !stickyVisible) {
        stickyCta.classList.add('visible');
        stickyVisible = true;
      } else if (!shouldShow && stickyVisible) {
        stickyCta.classList.remove('visible');
        stickyVisible = false;
      }
    }
  }, { passive: true });

  // --- Testimonial Carousel Dots (mobile swipe) ---
  var tGrid = document.querySelector('.testimonial-grid');
  var tDots = document.querySelectorAll('.testimonial-dots span');
  if (tGrid && tDots.length) {
    function updateDots() {
      var cards = tGrid.querySelectorAll('.testimonial-card');
      var scrollLeft = tGrid.scrollLeft;
      var gridWidth = tGrid.offsetWidth;
      var closest = 0;
      var minDist = Infinity;
      for (var i = 0; i < cards.length; i++) {
        var center = cards[i].offsetLeft + cards[i].offsetWidth / 2;
        var dist = Math.abs(center - scrollLeft - gridWidth / 2);
        if (dist < minDist) { minDist = dist; closest = i; }
      }
      tDots.forEach(function (d, idx) {
        d.classList.toggle('active', idx === closest);
      });
    }
    tGrid.addEventListener('scroll', updateDots, { passive: true });
    tDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        var cards = tGrid.querySelectorAll('.testimonial-card');
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });
    });
  }

})();
