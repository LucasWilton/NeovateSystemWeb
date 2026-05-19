// PHOTO UPLOAD - inputs removidos pois fotos já estão embutidas

// MOBILE MENU
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ACTIVE NAV
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
});

// CONTACT FORM
function sendContact() {
  const nome = document.getElementById('cf-nome').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  if (!nome || !email || !msg) { alert('Preencha nome, e-mail e mensagem.'); return; }
  document.querySelector('.submit-btn').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
  ['cf-nome','cf-email','cf-assunto','cf-msg'].forEach(id => document.getElementById(id).value = '');
}

// ANIMATED BARS ON LOAD
window.addEventListener('load', () => {
  document.querySelectorAll('.bar').forEach((b, i) => {
    const h = b.style.height;
    b.style.height = '0';
    setTimeout(() => { b.style.height = h; }, 600 + i * 80);
  });
});
