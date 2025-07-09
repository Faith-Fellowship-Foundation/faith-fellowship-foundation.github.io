// ===== MOBILE NAVIGATION TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        this.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ADD FADE-IN ANIMATION ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===== HAMBURGER MENU ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// ===== HOVER EFFECTS FOR COMMUNITY PHOTOS =====
const photoItems = document.querySelectorAll('.photo-item');
photoItems.forEach((item, index) => {
    // Add staggered animation delay
    item.style.animationDelay = `${index * 0.1}s`;
    
    // Add hover sound effect (optional - requires audio file)
    item.addEventListener('mouseenter', function() {
        // You can add a subtle sound effect here if desired
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===== DYNAMIC YEAR IN FOOTER =====
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
}

// ===== LOADING ANIMATION (Optional) =====
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ===== CONTACT FORM HANDLER (for future use) =====
function handleContactForm(event) {
    event.preventDefault();
    // Add your form handling logic here
    console.log('Form submitted!');
    // You can add AJAX submission or redirect here
}

// ===== UTILITY FUNCTIONS =====
// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== PARALLAX EFFECT FOR DECORATIONS (Optional) =====
window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const decorations = document.querySelectorAll('.decoration');
    
    decorations.forEach(decoration => {
        const speed = decoration.classList.contains('rocket') ? 0.5 : 0.3;
        decoration.style.transform = `translateY(${scrolled * speed}px)`;
    });
}));

// ===== ACCESSIBILITY: KEYBOARD NAVIGATION =====
// Allow Enter key to trigger button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            this.click();
        }
    });
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c Welcome to Faith & Fellowship Foundation! 🤝', 
    'font-size: 20px; color: #FF6B35; font-weight: bold;');
console.log('Thank you for visiting our website. Together, we can make a difference!');