// Menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (themeToggle) {
    // Check for saved theme preference or respect OS preference
    if (localStorage.getItem('theme') === 'dark' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
}

// Form validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Reset error messages
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Validate message
        if (messageInput.value.trim().length < 10) {
            messageError.style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // In a real application, you would send the form data to a server here
            // Simulate successful form submission
            setTimeout(() => {
                successMessage.style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 1000);
        }
    });
}

// Back to top button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});
