// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle (Basic support)
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Add CSS for active menu if needed
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .exams-text, .exams-image, .info-item, .contact-form-container').forEach(el => {
    el.style.opacity = '0'; // Initial state for JS-based animations
    observer.observe(el);
});

// Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Disable button
        const submitBtn = contactForm.querySelector('button');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando...';

        // Simulate API call
        setTimeout(() => {
            contactForm.reset();
            formStatus.textContent = '¡Gracias! Hemos recibido tu solicitud. Te contactaremos muy pronto.';
            formStatus.className = 'form-status success';
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Enviar Solicitud';

            // Scroll to status
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1500);
    });
}
