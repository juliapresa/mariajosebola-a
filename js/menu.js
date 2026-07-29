function toggleMenu() {
      document.getElementById('navbar-links').classList.toggle('open');
      document.querySelector('.hamburger').classList.toggle('active');
    }
    document.querySelectorAll('.navbar-links a').forEach(a => {
      a.addEventListener('click', () => {
        document.getElementById('navbar-links').classList.remove('open');
        document.querySelector('.hamburger').classList.remove('active');
      });
    });
    function switchTab(id, el) {
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-crema, .tab').forEach(t => t.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      el.classList.add('active');
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    document.body.style.animation = 'fadeInPage 0.4s ease';
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('http')) {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.style.transition = 'opacity 0.3s ease';
          document.body.style.opacity = '0';
          setTimeout(() => { window.location.href = href; }, 300);
        });
      }
    });