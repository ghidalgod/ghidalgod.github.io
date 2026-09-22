document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. CERRAR MENÚ EN MÓVILES AL HACER CLICK
    // ==========================================
    const navbarNav = document.getElementById('navbarNav');
    const allNavLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-cv-nav');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarNav && navbarNav.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarNav) || new bootstrap.Collapse(navbarNav);
                bsCollapse.hide();
            }
        });
    });

    // ==========================================
    // 2. ESTADO ACTIVO EN NAVBAR SEGÚN SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100; // Compensación por la Navbar fija

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 3. ANIMACIÓN EN CASCADA PARA SKILL CARDS
    // ==========================================
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ==========================================
    // 4. GIRO 3D EN SKILL CARDS (FLIP)
    // ==========================================
    skillCards.forEach(card => {
        // Aplica el giro solo si la tarjeta contiene elementos internos rotativos (.card-inner)
        if (card.querySelector('.card-inner')) {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        }
    });

    // ==========================================
    // 5. NAVEGACIÓN SUAVE (SMOOTH SCROLL)
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});