// Remove intro overlay smoothly
window.addEventListener('load', () => {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    if (intro) intro.style.display = 'none';
  }, 1700);
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple parallax effect for banquet image on scroll
const parallaxImg = document.querySelector('.parallax');
if (parallaxImg){
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.1;
    parallaxImg.style.transform = `translateY(${y}px)`;
  });
}

// Booking form validation + success message (demo)
const form = document.getElementById('bookingForm');
const msg  = document.getElementById('bookingMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const checkin  = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const name     = document.getElementById('name').value.trim();
    const phone    = document.getElementById('phone').value.trim();
    const email    = document.getElementById('email').value.trim();

    if (!checkin || !checkout) {
      msg.textContent = 'Please select your check-in and check-out dates.';
      msg.style.color = '#b00020';
      return;
    }
    if (new Date(checkout) <= new Date(checkin)) {
      msg.textContent = 'Check-out must be after check-in.';
      msg.style.color = '#b00020';
      return;
    }
    if (!name || !phone || !email) {
      msg.textContent = 'Please fill your name, phone and email.';
      msg.style.color = '#b00020';
      return;
    }

    // Demo success (replace with real API / email later)
    msg.textContent = 'Thank you! Your booking request has been sent. We will contact you shortly.';
    msg.style.color = '#0a6fae';
    form.reset();
  });
}
