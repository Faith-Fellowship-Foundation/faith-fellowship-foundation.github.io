// This function runs when the entire HTML document has been loaded
document.addEventListener('DOMContentLoaded', function() {

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar scroll effect
    // This adds a background and shadow to the navigation bar when you scroll down
    const navbar = document.getElementById('navbar');
    const navInner = document.getElementById('nav-inner');
    if (navbar && navInner) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                // Styles for when scrolled down
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
                navInner.classList.add('bg-white/90', 'shadow-lg', 'backdrop-blur-lg');
            } else {
                // Styles for when at the top of the page
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
                navInner.classList.remove('bg-white/90', 'shadow-lg', 'backdrop-blur-lg');
            }
        });
    }

    // Initialize Vanta.js animations
    // It will only run if the VANTA object exists (loaded from the CDN)
    if (window.VANTA) {
        // Hero section BIRDS animation
        VANTA.BIRDS({
            el: "#hero-animation",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 600.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf0f8ff, // Corresponds to light-bg color in Tailwind
            color1: 0x2a6f97, // Corresponds to cerulean-blue
            color2: 0x0a2463, // Corresponds to primary-navy
            birdSize: 1.30,
            wingSpan: 30.00,
            speedLimit: 5.00,
            separation: 50.00,
            quantity: 3.00
        });

        // MODIFICATION: Replaced FOG with HALO for a minimalist, elegant effect
        // Mission Card 1 HALO animation
        VANTA.HALO({
            el: "#mission-card-1",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 350.00,
            minWidth: 200.00,
            amplitudeFactor: 1.5,
            xOffset: 0.15,
            yOffset: 0.15,
            size: 1.20,
            backgroundColor: 0xffffff,
            baseColor: 0x61a5c2 // sky-blue
        });

        // Mission Card 2 HALO animation
        VANTA.HALO({
            el: "#mission-card-2",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 350.00,
            minWidth: 200.00,
            amplitudeFactor: 1.5,
            xOffset: 0.15,
            yOffset: 0.15,
            size: 1.20,
            backgroundColor: 0xffffff,
            baseColor: 0x2a6f97 // cerulean-blue
        });
    }

});
