// ========================================
// STARRY NIGHT ANIMATED BACKGROUND WITH 3D
// ========================================

// Create twinkling stars with variety and 3D effects
function createParticles() {
    const particleContainer = document.getElementById('particles');
    const particleCount = 110;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Varied sizes between 2-10px for star variety
        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random horizontal position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Slightly slower and softer movement
        const duration = Math.random() * 35 + 8;
        particle.style.animationDuration = `${duration}s, ${Math.random() * 3 + 3}s`;
        
        // Random delay for staggered twinkling effect
        particle.style.animationDelay = `${Math.random() * 25}s, ${Math.random() * 3}s`;
        
        particleContainer.appendChild(particle);
    }
}

// Enhanced Mouse follower effect with blue glow
const mouseFollower = document.getElementById('mouseFollower');
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;
let isMouseMoving = false;
let mouseTimeout;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseFollower.style.opacity = '1';
    
    isMouseMoving = true;
    clearTimeout(mouseTimeout);
    
    // Hide follower after 2 seconds of no movement
    mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
        mouseFollower.style.opacity = '0';
    }, 2000);
});

// Smooth follow animation with easing
function animateFollower() {
    const dx = mouseX - followerX;
    const dy = mouseY - followerY;
    
    followerX += dx * 0.09;
    followerY += dy * 0.09;
    
    mouseFollower.style.left = `${followerX}px`;
    mouseFollower.style.top = `${followerY}px`;
    
    requestAnimationFrame(animateFollower);
}

// 3D Ripple effect with glittering particles on button click
function create3DRipple(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Create main ripple
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect-3d');
    
    button.appendChild(ripple);
    
    // Create glittering explosion particles
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('span');
        particle.classList.add('click-particle');
        particle.style.left = (event.clientX - rect.left) + 'px';
        particle.style.top = (event.clientY - rect.top) + 'px';
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = 40 + Math.random() * 40;
        particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
        particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
        
        button.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1200);
    }
    
    setTimeout(() => ripple.remove(), 800);
    
    // Add shake effect
    button.style.animation = 'buttonShake 0.2s ease';
    setTimeout(() => {
        button.style.animation = '';
    }, 300);
}

// Add magnetic and 3D effect to buttons
function addMagnetic3DEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            button.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 10;
            const rotateY = -(x / rect.width) * 10;
            
            button.style.transform = `
                translate(${x * 0.08}px, ${y * 0.08}px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.02)
                translateZ(10px)
            `;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            button.style.transform = 'translate(0, 0) rotateX(0) rotateY(0) scale(1) translateZ(0)';
        });
        
        // Add 3D click ripple effect
        button.addEventListener('click', create3DRipple);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateFollower();
    addMagnetic3DEffect();
    
    // Add CSS for 3D effects dynamically - BLUE THEME
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect-3d {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(34, 211, 238, 0.5) 50%, transparent 100%);
            animation: ripple3d-animation 0.8s ease-out;
            pointer-events: none;
            transform-style: preserve-3d;
        }
        
        @keyframes ripple3d-animation {
            0% {
                transform: scale(0) translateZ(0);
                opacity: 1;
            }
            100% {
                transform: scale(1.5) translateZ(50px);
                opacity: 0;
            }
        }
        
        .click-particle {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: radial-gradient(circle, #22d3ee, #3b82f6);
            pointer-events: none;
            animation: particle-explode 1.2s ease-out forwards, twinkle-particle 0.3s ease-in-out infinite;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.9), 0 0 30px rgba(34, 211, 238, 0.6);
        }
        
        @keyframes particle-explode {
            0% {
                transform: translate(0, 0) scale(1) translateZ(0);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(0) translateZ(40px);
                opacity: 0;
            }
        }
        
        @keyframes twinkle-particle {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(2); }
        }
        
        @keyframes buttonShake {
            0%, 100% { transform: translateX(0) rotateZ(0deg); }
            25% { transform: translateX(-5px) rotateZ(-2deg); }
            75% { transform: translateX(5px) rotateZ(2deg); }
        }
        
        /* 3D perspective for body */
        body {
            perspective: 1000px;
            transform-style: preserve-3d;
        }
    `;
    document.head.appendChild(style);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({
                top: targetTop,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
            });
        }
    });
});

// Typing effect for home section
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Prompt Engineer'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before next phrase
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing effect
setTimeout(type, 1000);

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    let activeSectionId = null;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            activeSectionId = sectionId;
        }
    });

    navLinks.forEach(link => link.classList.remove('active'));
    if (activeSectionId) {
        const activeNavLink = document.querySelector(`.nav-link[href="#${activeSectionId}"]`);
        if (activeNavLink) activeNavLink.classList.add('active');
    }
}

// Back to top button
const backToTop = document.getElementById('backToTop');

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all glass cards
document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Progress bar animation
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-fill');
            if (progressBar) {
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.learning-card').forEach(card => {
    progressObserver.observe(card);
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        try {
            const response = await fetch('https://formsubmit.co/ajax/guhanchinnasamy5801@gmail.com', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            alert('Message sent successfully! I will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            alert('Unable to send message right now. Please try again or email me directly.');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        }
    });
}

// Parallax effect target
const parallax = document.querySelector('.home-section');

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

let scrollTicking = false;
function updateOnScroll() {
    const scrollY = window.pageYOffset;

    scrollActive();

    if (backToTop) {
        if (scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }

    if (parallax) {
        parallax.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
    }

    if (navbar) {
        if (scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    }

    scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(updateOnScroll);
        scrollTicking = true;
    }
}, { passive: true });

// Random tech tag highlighting
function highlightRandomTechTags() {
    const techTags = document.querySelectorAll('.tech-tag');
    
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * techTags.length);
        const randomTag = techTags[randomIndex];
        
        randomTag.style.transform = 'scale(1.1)';
        randomTag.style.background = 'var(--primary-gradient)';
        
        setTimeout(() => {
            randomTag.style.transform = 'scale(1)';
            randomTag.style.background = 'rgba(102, 126, 234, 0.2)';
        }, 1000);
    }, 3000);
}

highlightRandomTechTags();

// Cursor trail effect (optional)
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

if (circles.length > 0) {
    circles.forEach(function (circle) {
        circle.x = 0;
        circle.y = 0;
    });

    window.addEventListener('mousemove', function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            
            circle.style.scale = (circles.length - index) / circles.length;
            
            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }

    animateCircles();
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger initial scroll to set active nav link
    updateOnScroll();
});

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Video Modal Functionality
const videoModal = document.getElementById('demo-video');
const demoButtons = document.querySelectorAll('a[href="#demo-video"]');
const closeModal = document.querySelector('.close-modal');

demoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Demo button clicked - opening modal');
        videoModal.classList.add('active');
        // Load video when modal opens (if using data-src)
        const iframe = videoModal.querySelector('iframe');
        if (iframe && iframe.dataset.src && !iframe.src) {
            console.log('Loading video from data-src');
            iframe.src = iframe.dataset.src;
        }
        console.log('Modal should be visible now');
    });
});

if (closeModal) {
    closeModal.addEventListener('click', () => {
        console.log('Close button clicked');
        videoModal.classList.remove('active');
        // Pause video by reloading iframe
        const iframe = videoModal.querySelector('iframe');
        if (iframe && iframe.src) {
            const iframeSrc = iframe.src;
            iframe.src = '';
            setTimeout(() => {
                iframe.src = iframeSrc;
            }, 100);
        }
    });
}

// Close modal when clicking outside
if (videoModal) {
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            // Stop video playback
            const iframe = videoModal.querySelector('iframe');
            if (iframe && iframe.src) {
                const iframeSrc = iframe.src;
                iframe.src = '';
                setTimeout(() => {
                    iframe.src = iframeSrc;
                }, 100);
            }
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        videoModal.classList.remove('active');
        const iframe = videoModal.querySelector('iframe');
        if (iframe && iframe.src) {
            const iframeSrc = iframe.src;
            iframe.src = '';
            setTimeout(() => {
                iframe.src = iframeSrc;
            }, 100);
        }
    }
});

console.log('Portfolio loaded successfully! ✨');
