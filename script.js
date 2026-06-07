/**
 * Anselmus Dwi Nugroho - Personal Portfolio Interactivity
 * Optimized for standard deployment on custom domain: anseldn.com
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- MOBILE NAV TOGGLE ---
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('nav a');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNavToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // --- STICKY NAV BACKGROUND ---
  const header = document.querySelector('header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initially in case of refresh

  // --- ACTIVE LINK TRACKING (INTERSECTION OBSERVER) ---
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Adjusted to trigger active state in viewport focus
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // --- CURSOR GLOW TRACKING (LERP - LINEAR INTERPOLATION) ---
  const cursorGlow = document.getElementById('cursor-glow');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursorGlow = () => {
    // Lerp smoothing: target + (current - target) * speed
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    if (cursorGlow) {
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;
    }

    requestAnimationFrame(animateCursorGlow);
  };
  animateCursorGlow();

  // --- GLASS CARD REFLECTION & 3D TILT EFFECT ---
  const glassCards = document.querySelectorAll('.portfolio-card');

  glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate inside the card
      const y = e.clientY - rect.top;  // y coordinate inside the card

      // Update custom properties for reflection gradient
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D Tilt calculation
      const width = rect.width;
      const height = rect.height;
      const centerX = rect.left + width / 2;
      const centerY = rect.top + height / 2;
      const mouseXFromCenter = e.clientX - centerX;
      const mouseYFromCenter = e.clientY - centerY;

      // Max tilt angle in degrees
      const maxTilt = 4;
      const rotateX = ((mouseYFromCenter / (height / 2)) * -maxTilt).toFixed(2);
      const rotateY = ((mouseXFromCenter / (width / 2)) * maxTilt).toFixed(2);

      // Apply transform style
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    // Reset styles on mouse leave
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.setProperty('--mouse-x', '0px');
      card.style.setProperty('--mouse-y', '0px');
    });
  });

  // --- CONTACT FORM SUBMIT HANDLER ---
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;

      // Get form fields
      const nameVal = document.getElementById('form-name')?.value || '';
      const emailVal = document.getElementById('form-email')?.value || '';
      const subjectVal = document.getElementById('form-subject')?.value || '';
      const messageVal = document.getElementById('form-message')?.value || '';
      const honeyVal = document.getElementById('form-honey')?.value || '';

      // Simple client-side validation check
      if (!nameVal || !emailVal || !subjectVal || !messageVal) {
        return;
      }

      // Spam prevention check (Honeypot)
      if (honeyVal) {
        // Silently mock success to trick the bot without using email quota
        submitBtn.innerHTML = `Message Sent! ✓`;
        submitBtn.style.background = 'linear-gradient(135deg, #00f2fe, #24ff72)';
        contactForm.reset();
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
        return;
      }

      // Loading state
      submitBtn.innerHTML = `Sending... <svg viewBox="0 0 24 24" style="animation: rotateClockwise 1s linear infinite; width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-left: 8px;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" stroke-dasharray="32" /></svg>`;
      submitBtn.disabled = true;

      // Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw8UyX2GMj_x3E1dC8r6MQ8OYhihnt4nQpodGRehgStYIgJT5tsbets5UekGOSSLlaGhg/exec';

      fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          subject: subjectVal,
          message: messageVal
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.status === 'success') {
            submitBtn.innerHTML = `Message Sent! ✓`;
            submitBtn.style.background = 'linear-gradient(135deg, #00f2fe, #24ff72)';
            contactForm.reset();
          } else {
            throw new Error(data.message || 'Submission failed');
          }

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
          }, 3000);
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          submitBtn.innerHTML = `Error! Try again. ✕`;
          submitBtn.style.background = 'linear-gradient(135deg, #ff416c, #ff4b2b)';

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
          }, 3000);
        });
    });
  }
});
