/**
 * TB TOGETHER SOCIAL - PREMIUM INTERACTIVE SCRIPT
 * Handles custom cursor, scroll reveals, language switching, and micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CUSTOM CURSOR
    const dot = document.querySelector('.cursor-dot');
    const follower = document.querySelector('.cursor-follower');
    
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        // Dot follows fast
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

        // Follower follows with more lag
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate(${followerX - 16}px, ${followerY - 16}px)`;

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Cursor hover effects
    const interactiveElements = document.querySelectorAll('a, button, .faq-item, .stat-card, .process-card, .team-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform += ' scale(2)';
            follower.style.background = 'rgba(43, 68, 255, 0.1)';
            follower.style.borderColor = 'transparent';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = follower.style.transform.replace(' scale(2)', '');
            follower.style.background = 'rgba(43, 68, 255, 0.05)';
            follower.style.borderColor = '#2B44FF';
        });
    });

    // 2. SCROLL REVEAL
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2.1 STEP PROGRESS TRACKER
    const processSection = document.querySelector('.process');
    const stepItems = document.querySelectorAll('.step-item');
    const stepProgress = document.querySelector('.step-progress');

    window.addEventListener('scroll', () => {
        if (!processSection) return;

        const sectionRect = processSection.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const viewportHeight = window.innerHeight;

        // Calculate progress percentage
        let progress = 0;
        if (sectionTop < viewportHeight / 2) {
            progress = Math.min(100, Math.max(0, ((viewportHeight / 2 - sectionTop) / (sectionHeight - viewportHeight / 2)) * 100));
        }
        if (stepProgress) stepProgress.style.height = `${progress}%`;

        // Toggle active state for steps
        stepItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top < viewportHeight / 1.5) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });

    // 3. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. FAQ ACCORDION
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 5. LANGUAGE SWITCHER
    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang === currentLang) return;

            currentLang = lang;
            
            // Update UI buttons
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update all translations
            const translatables = document.querySelectorAll('[data-en]');
            translatables.forEach(el => {
                const text = el.getAttribute(`data-${lang}`);
                if (text) {
                    // Smooth text transition
                    el.style.opacity = '0';
                    setTimeout(() => {
                        el.textContent = text;
                        el.style.opacity = '1';
                    }, 200);
                }
            });

            // Update specific nav texts if needed
            updateNavTexts(lang);
        });
    });

    function updateNavTexts(lang) {
        // Already handled by data-en/data-tr on links in index.html
    }

    // 6. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
