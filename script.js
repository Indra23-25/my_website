'use strict';

// The content, navigation, contact links, and CV all work without JavaScript.
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  let resetTimeout;
  copyButton.addEventListener('click', async () => {
    clearTimeout(resetTimeout);
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = 'Email address copied.';
      copyButton.querySelector('span').textContent = 'Copied!';
    } catch {
      copyStatus.textContent = 'Please select the email address above to copy it.';
    }
    resetTimeout = setTimeout(() => {
      copyStatus.textContent = '';
      copyButton.querySelector('span').textContent = 'Copy email address';
    }, 3500);
  });
}

// Use each section's position, rather than its size, to mark the current section.
const navLinks = [...document.querySelectorAll('.navigation a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
const header = document.querySelector('.site-header');
let queued = false;
function updateNavigation() {
  const threshold = (header?.getBoundingClientRect().height || 85) + 75;
  let active = -1;
  sections.forEach((section, index) => {
    if (section && section.getBoundingClientRect().top <= threshold) active = index;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) active = sections.length - 1;
  navLinks.forEach((link, index) => {
    if (index === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  queued = false;
}
function queueNavigationUpdate() {
  if (!queued) {
    queued = true;
    window.requestAnimationFrame(updateNavigation);
  }
}
window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
window.addEventListener('resize', queueNavigationUpdate, { passive: true });
updateNavigation();
