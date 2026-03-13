<script>
    // Copy Email Function
    function copyEmail(e) {
        e.preventDefault();
        const email = "rshah652@gatech.edu";
        navigator.clipboard.writeText(email).then(() => {
            const btn = document.getElementById('copyBtn');
            const originalText = btn.innerText;
            btn.innerText = "Copied!";
            setTimeout(() => {
                btn.innerText = originalText;
            }, 2000);
        });
    }

    // Scroll-triggered entry animation
    const items = document.querySelectorAll('.exp-item');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 120);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));

    // Active nav link highlight
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.style.color = '');
          const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (active) active.style.color = 'var(--accent)';
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => navIO.observe(s));
</script>
