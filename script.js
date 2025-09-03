// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.hidden = !mobileNav.hidden;
  });
}

// Back-to-top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
if (backToTop) {
  backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// Search filter
const searchInput = document.getElementById('searchInput');
const postsGrid = document.getElementById('postsGrid');
if (searchInput && postsGrid) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    postsGrid.querySelectorAll('.card').forEach(card => {
      const title = card.dataset.title.toLowerCase();
      const category = card.dataset.category.toLowerCase();
      card.style.display = (title.includes(term) || category.includes(term)) ? '' : 'none';
    });
  });
}

// Category filter
const categoryList = document.getElementById('categoryList');
if (categoryList && postsGrid) {
  categoryList.addEventListener('click', e => {
    if (e.target.matches('[data-filter]')) {
      const filter = e.target.dataset.filter.toLowerCase();
      postsGrid.querySelectorAll('.card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category.toLowerCase() === filter) ? '' : 'none';
      });
    }
  });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    contactForm.reset();
  });
}

// Comment form validation
const commentForm = document.getElementById('commentForm');
if (commentForm) {
  commentForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Comment posted! (Demo only)');
    commentForm.reset();
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
