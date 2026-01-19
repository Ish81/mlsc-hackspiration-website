// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            // Use requestAnimationFrame for smoother scrolling
            const startPosition = window.pageYOffset;
            const distance = offsetTop - startPosition;
            let startTime = null;
            
            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const duration = 800; // 800ms scroll duration
                const progress = Math.min(timeElapsed / duration, 1);
                
                window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
                
                if (progress < 1) {
                    requestAnimationFrame(animation);
                }
            }
            
            requestAnimationFrame(animation);
        }
    });
});

// ===== Countdown Timer =====
function updateCountdown() {
    // Set target date: January 31, 2026, 11:59 PM
    const targetDate = new Date('2026-01-31T23:59:59').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        // Registration closed
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ===== Prize Pool Animation =====
function animatePrizeBars() {
    const prizeBars = document.querySelectorAll('.prize-fill');
    
    prizeBars.forEach(bar => {
        const amount = bar.getAttribute('data-amount');
        setTimeout(() => {
            bar.style.width = amount + '%';
        }, 500);
    });
}

// Trigger animation when section is in view
const prizeSection = document.querySelector('.prize-section');
const prizeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animatePrizeBars();
            prizeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (prizeSection) {
    prizeObserver.observe(prizeSection);
}

// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active', !isActive);
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.track-card, .perk-card, .event-card, .timeline-item, .sponsor-category');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Parallax Effect for Hero (Reduced) =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`; // Reduced parallax
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.3; // Less fade
        }
    }
});

// ===== Glitch Effect for Title (Reduced) =====
function addGlitchEffect() {
    const title = document.querySelector('.title-line');
    if (!title) return;
    
    setInterval(() => {
        if (Math.random() > 0.98) { // Less frequent glitches
            title.style.textShadow = `
                1px 1px 0 ${getRandomColor()},
                -1px -1px 0 ${getRandomColor()},
                0 0 8px ${getRandomColor()}
            `;
            
            setTimeout(() => {
                title.style.textShadow = '0 0 10px rgba(0, 240, 255, 0.3)'; // Reduced glow
            }, 50); // Shorter duration
        }
    }, 500); // Less frequent checks
}

function getRandomColor() {
    const colors = ['#00f0ff', '#ff00ff', '#9d00ff', '#0066ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

addGlitchEffect();

// ===== Floating Animation for Icons =====
function addFloatingAnimation() {
    const icons = document.querySelectorAll('.domain-icon, .perk-icon, .track-icon');
    
    icons.forEach((icon, index) => {
        icon.style.animation = `float ${3 + (index % 3)}s ease-in-out infinite`;
        icon.style.animationDelay = `${index * 0.2}s`;
    });
}

// Add floating keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

addFloatingAnimation();

// ===== Typing Effect for Hero Title (Optional) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== Cursor Trail Effect (Disabled - too distracting) =====
// Disabled to reduce visual clutter and improve performance

// ===== Background Particles =====
function createBackgroundParticles() {
    const particleCount = 50;
    const hero = document.querySelector('.hero-background');
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = getRandomColor();
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${getRandomColor()}`;
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        hero.appendChild(particle);
    }
}

createBackgroundParticles();

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Form Validation (if forms are added later) =====
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff00ff';
        } else {
            input.style.borderColor = '#00f0ff';
        }
    });
    
    return isValid;
}

// ===== Social Media Link Handler =====
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add analytics or tracking here if needed
        console.log('Social link clicked:', link.href);
    });
});

// ===== Performance Optimization: Lazy Load Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Scroll Progress Bar =====
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ===== Enhanced Background Particles (Reduced) =====
function createBackgroundParticles() {
    const particleCount = 15; // Reduced from 50
    const hero = document.querySelector('.hero-background');
    if (!hero) return;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 2 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = getRandomColor();
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.2 + 0.1; // Reduced opacity
        particle.style.boxShadow = `0 0 ${Math.random() * 5 + 3}px ${getRandomColor()}`;
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.pointerEvents = 'none';
        
        hero.appendChild(particle);
    }
}

// ===== Create Floating Geometric Shapes (Reduced) =====
function createFloatingShapes() {
    const sections = document.querySelectorAll('.section-bg, .hero-background');
    
    sections.forEach(section => {
        const shapeCount = 5; // Reduced from 15
        
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            const shapeType = Math.floor(Math.random() * 3);
            const size = Math.random() * 30 + 10;
            const colors = ['#00f0ff', '#ff00ff', '#9d00ff', '#0066ff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            shape.style.position = 'absolute';
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.opacity = Math.random() * 0.15 + 0.05; // Reduced opacity
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.pointerEvents = 'none';
            shape.style.animation = `floatShape ${Math.random() * 20 + 10}s ease-in-out infinite`;
            shape.style.animationDelay = Math.random() * 5 + 's';
            
            if (shapeType === 0) {
                // Circle
                shape.style.borderRadius = '50%';
                shape.style.background = `radial-gradient(circle, ${color}, transparent)`;
                shape.style.boxShadow = `0 0 ${size * 2}px ${color}`;
            } else if (shapeType === 1) {
                // Square rotated
                shape.style.transform = 'rotate(45deg)';
                shape.style.background = `linear-gradient(45deg, ${color}, transparent)`;
                shape.style.boxShadow = `0 0 ${size}px ${color}`;
            } else {
                // Triangle (using border trick)
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = `${size/2}px solid transparent`;
                shape.style.borderRight = `${size/2}px solid transparent`;
                shape.style.borderBottom = `${size}px solid ${color}`;
                shape.style.background = 'none';
                shape.style.boxShadow = `0 0 ${size}px ${color}`;
            }
            
            section.appendChild(shape);
        }
    });
}

// ===== Create Animated Circuit Lines (Reduced) =====
function createCircuitLines() {
    const sections = document.querySelectorAll('.section-bg');
    
    sections.forEach(section => {
        const lineCount = 3; // Reduced from 8
        
        for (let i = 0; i < lineCount; i++) {
            const line = document.createElement('div');
            const isHorizontal = Math.random() > 0.5;
            const colors = ['#00f0ff', '#ff00ff', '#9d00ff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            if (isHorizontal) {
                line.style.position = 'absolute';
                line.style.width = Math.random() * 200 + 100 + 'px';
                line.style.height = '2px';
                line.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
                line.style.left = Math.random() * 100 + '%';
                line.style.top = Math.random() * 100 + '%';
                line.style.boxShadow = `0 0 10px ${color}`;
                line.style.animation = `linePulse ${Math.random() * 3 + 2}s ease-in-out infinite`;
            } else {
                line.style.position = 'absolute';
                line.style.width = '2px';
                line.style.height = Math.random() * 200 + 100 + 'px';
                line.style.background = `linear-gradient(180deg, transparent, ${color}, transparent)`;
                line.style.left = Math.random() * 100 + '%';
                line.style.top = Math.random() * 100 + '%';
                line.style.boxShadow = `0 0 10px ${color}`;
                line.style.animation = `linePulse ${Math.random() * 3 + 2}s ease-in-out infinite`;
            }
            
            line.style.pointerEvents = 'none';
            line.style.opacity = Math.random() * 0.2 + 0.1; // Reduced opacity
            section.appendChild(line);
        }
    });
}

// Add new animations to style
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes floatShape {
        0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.2;
        }
        50% { 
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg) scale(1.2);
            opacity: 0.5;
        }
    }
    
    @keyframes linePulse {
        0%, 100% { 
            opacity: 0.2;
            transform: scaleX(1);
        }
        50% { 
            opacity: 0.8;
            transform: scaleX(1.1);
        }
    }
`;
document.head.appendChild(additionalStyles);

// ===== Matrix Code Rain Effect (Disabled - too overpowering) =====
function createMatrixRain() {
    // Disabled to reduce visual clutter
    return;
}

// ===== Create Data Streams (Reduced) =====
function createDataStreams() {
    const sections = document.querySelectorAll('.section-bg');
    
    sections.forEach(section => {
        const streamCount = 2; // Reduced from 5
        
        for (let i = 0; i < streamCount; i++) {
            const stream = document.createElement('div');
            const colors = ['#00f0ff', '#ff00ff', '#9d00ff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            stream.style.position = 'absolute';
            stream.style.width = '2px';
            stream.style.height = Math.random() * 300 + 200 + 'px';
            stream.style.background = `linear-gradient(180deg, ${color}, transparent)`;
            stream.style.left = Math.random() * 100 + '%';
            stream.style.top = '-200px';
            stream.style.boxShadow = `0 0 10px ${color}`;
            stream.style.animation = `dataStream ${Math.random() * 4 + 2}s linear infinite`;
            stream.style.animationDelay = Math.random() * 2 + 's';
            stream.style.opacity = 0.2; // Reduced opacity
            stream.style.pointerEvents = 'none';
            
            section.appendChild(stream);
        }
    });
}

createBackgroundParticles();
createFloatingShapes();
createCircuitLines();
createMatrixRain();
createDataStreams();

// ===== Console Easter Egg =====
console.log('%c🚀 Welcome to Hackspiration \'26! 🚀', 'color: #00f0ff; font-size: 20px; font-weight: bold;');
console.log('%cHack. Hustle. Win.', 'color: #ff00ff; font-size: 16px;');
console.log('%cBuilt with ❤️ by MLSC VIT Pune', 'color: #9d00ff; font-size: 12px;');

