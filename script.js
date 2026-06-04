// ==========================================================================
// INTERACTIVE HYPERSPEED STARFIELD BACKGROUND CANVAS ENGINE
// ==========================================================================

const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');

let bgWidth = (bgCanvas.width = window.innerWidth);
let bgHeight = (bgCanvas.height = window.innerHeight);

class Star {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = (Math.random() - 0.5) * bgWidth;
        this.y = (Math.random() - 0.5) * bgHeight;
        this.z = Math.random() * bgWidth;
        this.pz = 0;
    }
    update(speed) {
        this.pz = this.z;
        this.z -= speed;
        if (this.z < 1) {
            this.z = bgWidth;
            this.pz = 0;
            this.x = (Math.random() - 0.5) * bgWidth;
            this.y = (Math.random() - 0.5) * bgHeight;
        }
    }
    draw() {
        const cx = bgWidth / 2;
        const cy = bgHeight / 2;
        const sx = this.x / (this.z / bgWidth);
        const sy = this.y / (this.z / bgWidth);

        if (this.pz !== 0) {
            const px = cx + sx;
            const py = cy + sy;
            const qx = cx + this.x / (this.pz / bgWidth);
            const qy = cy + this.y / (this.pz / bgWidth);

            if (px >= 0 && px <= bgWidth && py >= 0 && py <= bgHeight) {
                bgCtx.beginPath();
                bgCtx.moveTo(qx, qy);
                bgCtx.lineTo(px, py);
                bgCtx.stroke();
            }
        }
    }
}

let stars = [];
const starCount = 350;
let speed = 0.5;
let targetSpeed = 0.5;

function initStars() {
    stars = [];
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }
}

window.addEventListener('resize', () => {
    bgWidth = (bgCanvas.width = window.innerWidth);
    bgHeight = (bgCanvas.height = window.innerHeight);
    initStars();
});

initStars();

function animateStars() {
    bgCtx.fillStyle = 'rgba(0, 0, 0, 0.18)';
    bgCtx.fillRect(0, 0, bgWidth, bgHeight);

    bgCtx.strokeStyle = 'rgba(34, 211, 238, 0.35)';
    bgCtx.lineWidth = 1;

    speed += (targetSpeed - speed) * 0.05;
    targetSpeed += (0.5 - targetSpeed) * 0.03;

    stars.forEach(star => {
        star.update(speed * 8);
        star.draw();
    });

    requestAnimationFrame(animateStars);
}
animateStars();

function triggerWarp() {
    targetSpeed = 4.5;
}
window.addEventListener('scroll', triggerWarp, { passive: true });
window.addEventListener('mousedown', triggerWarp);
window.addEventListener('touchstart', triggerWarp, { passive: true });


// ==========================================================================
// SELECTABLE MULTI-CURSOR CUSTOM POINTER ENGINE
// ==========================================================================

const cursorCanvas = document.getElementById('cursor-canvas');
const cursorCtx = cursorCanvas.getContext('2d');
let cursorWidth = (cursorCanvas.width = window.innerWidth);
let cursorHeight = (cursorCanvas.height = window.innerHeight);

window.addEventListener('resize', () => {
    cursorWidth = (cursorCanvas.width = window.innerWidth);
    cursorHeight = (cursorCanvas.height = window.innerHeight);
});

let cursorStyle = localStorage.getItem('cursor-style') || 'constellation';
const mouse = { x: 0, y: 0, px: 0, py: 0, active: false };

const penEl = document.getElementById('cursor-pen');
const orbitalEl = document.getElementById('cursor-orbital');
const crosshairEl = document.getElementById('cursor-crosshair');

let orbitalRing = { x: 0, y: 0 };
let constellationPoints = [];
let particles = [];

window.addEventListener('mousemove', (e) => {
    mouse.px = mouse.x;
    mouse.py = mouse.y;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;

    updateCursorDOM();

    if (cursorStyle === 'constellation') {
        const distMoved = Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py);
        if (distMoved > 2 && Math.random() < 0.5) {
            constellationPoints.push({
                x: mouse.x,
                y: mouse.y,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                life: 1.0,
                decay: 0.015 + Math.random() * 0.01
            });
        }
    }

    if (cursorStyle === 'particles') {
        const distMoved = Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py);
        if (distMoved > 1) {
            particles.push({
                x: mouse.x,
                y: mouse.y,
                vx: (Math.random() - 0.5) * 2.5,
                vy: (Math.random() - 0.5) * 2.5 - 0.8,
                size: Math.random() * 3.5 + 1.2,
                life: 1.0,
                decay: 0.02 + Math.random() * 0.015
            });
        }
    }
});

window.addEventListener('mouseleave', () => {
    mouse.active = false;
    hideAllCursors();
});

window.addEventListener('mouseenter', () => {
    mouse.active = true;
    showActiveCursor();
});

function updateCursorDOM() {
    if (!mouse.active) return;
    if (cursorStyle === 'pen' && penEl) {
        penEl.style.left = `${mouse.x}px`;
        penEl.style.top = `${mouse.y}px`;
    }
    if (cursorStyle === 'crosshair' && crosshairEl) {
        crosshairEl.style.left = `${mouse.x}px`;
        crosshairEl.style.top = `${mouse.y}px`;
    }
}

function hideAllCursors() {
    if (penEl) penEl.classList.add('hidden');
    if (orbitalEl) orbitalEl.classList.add('hidden');
    if (crosshairEl) crosshairEl.classList.add('hidden');
    cursorCanvas.classList.add('hidden');
}

function showActiveCursor() {
    hideAllCursors();
    if (cursorStyle === 'pen' && penEl) penEl.classList.remove('hidden');
    if (cursorStyle === 'orbital' && orbitalEl) orbitalEl.classList.remove('hidden');
    if (cursorStyle === 'crosshair' && crosshairEl) crosshairEl.classList.remove('hidden');
    if (cursorStyle === 'constellation' || cursorStyle === 'particles') {
        cursorCanvas.classList.remove('hidden');
    }
}

function animateCursor() {
    cursorCtx.clearRect(0, 0, cursorWidth, cursorHeight);

    if (cursorStyle === 'constellation' && constellationPoints.length > 0) {
        constellationPoints.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
        });
        constellationPoints = constellationPoints.filter(p => p.life > 0);

        for (let i = 0; i < constellationPoints.length; i++) {
            for (let j = i + 1; j < constellationPoints.length; j++) {
                const p1 = constellationPoints[i];
                const p2 = constellationPoints[j];
                const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (d < 110) {
                    const alpha = (1 - d / 110) * 0.22 * Math.min(p1.life, p2.life);
                    cursorCtx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
                    cursorCtx.lineWidth = 0.8;
                    cursorCtx.beginPath();
                    cursorCtx.moveTo(p1.x, p1.y);
                    cursorCtx.lineTo(p2.x, p2.y);
                    cursorCtx.stroke();
                }
            }
        }

        constellationPoints.forEach(p => {
            cursorCtx.fillStyle = `rgba(34, 211, 238, ${p.life * 0.65})`;
            cursorCtx.beginPath();
            cursorCtx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            cursorCtx.fill();
        });
    }

    if (cursorStyle === 'particles' && particles.length > 0) {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
        });
        particles = particles.filter(p => p.life > 0);

        particles.forEach(p => {
            cursorCtx.fillStyle = `rgba(34, 211, 238, ${p.life * 0.75})`;
            cursorCtx.beginPath();
            cursorCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            cursorCtx.fill();
        });
    }

    if (cursorStyle === 'orbital' && orbitalEl && mouse.active) {
        const ring = orbitalEl.querySelector('.ring');
        const dot = orbitalEl.querySelector('.dot');
        
        if (dot) {
            dot.style.left = `${mouse.x}px`;
            dot.style.top = `${mouse.y}px`;
        }

        orbitalRing.x += (mouse.x - orbitalRing.x) * 0.15;
        orbitalRing.y += (mouse.y - orbitalRing.y) * 0.15;

        if (ring) {
            ring.style.left = `${orbitalRing.x}px`;
            ring.style.top = `${orbitalRing.y}px`;
        }
    }

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor Menu Toggling
const cursorToggle = document.getElementById('cursor-toggle');
const cursorMenu = document.getElementById('cursor-menu');
const cursorOptions = document.querySelectorAll('.cursor-option');

if (cursorToggle && cursorMenu) {
    cursorToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        cursorMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!cursorMenu.contains(e.target) && e.target !== cursorToggle) {
            cursorMenu.classList.add('hidden');
        }
    });

    cursorOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            cursorOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');

            cursorStyle = opt.getAttribute('data-cursor');
            localStorage.setItem('cursor-style', cursorStyle);

            showActiveCursor();
            cursorMenu.classList.add('hidden');
        });
    });
}
showActiveCursor();


// ==========================================================================
// SCROLL PROGRESS BAR
// ==========================================================================

const scrollBar = document.getElementById('scroll-progress-bar');
window.addEventListener('scroll', () => {
    if (!scrollBar) return;
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollBar.style.width = `${scrolled}%`;
});


// ==========================================================================
// HERO TYPEWRITER TYPING ANIMATION
// ==========================================================================

const typewriterText = document.getElementById('typewriter-text');
const roles = ['AI Fullstack Developer', 'Prompt Engineer & AI Specialist', 'Fullstack Engineer'];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentRole = roles[roleIdx];
    if (isDeleting) {
        typewriterText.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 50;
    } else {
        typewriterText.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIdx === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2200;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
}
if (typewriterText) {
    setTimeout(type, 1000);
}


// ==========================================================================
// TECH STACK MARQUEE DYNAMIC RENDER & CATEGORY FILTERING
// ==========================================================================

const techBadges = [
    { name: "Python", cat: "language", icon: "🐍" },
    { name: "C", cat: "language", icon: "💻" },
    { name: "JavaScript", cat: "language", icon: "🟨" },
    { name: "Dart", cat: "language", icon: "🎯" },
    { name: "SQL", cat: "language", icon: "🗄️" },
    { name: "FastAPI", cat: "backend", icon: "⚡" },
    { name: "NLP", cat: "ai", icon: "🗣️" },
    { name: "Regex Parsing", cat: "ai", icon: "🔍" },
    { name: "AI Optimization", cat: "ai", icon: "⚙️" },
    { name: "Prompt Design", cat: "ai", icon: "✍️" },
    { name: "System Prompts", cat: "ai", icon: "🧠" },
    { name: "Context Optimization", cat: "ai", icon: "📊" },
    { name: "HTML5 / CSS3", cat: "frontend", icon: "🎨" },
    { name: "Figma Essentials", cat: "frontend", icon: "📐" },
    { name: "Supabase", cat: "database", icon: "⚡" },
    { name: "Hive DB", cat: "database", icon: "📦" },
    { name: "PostgreSQL", cat: "database", icon: "🐘" },
    { name: "SQLite", cat: "database", icon: "💾" },
    { name: "Git & GitHub", cat: "cloud", icon: "🐙" },
    { name: "VS Code", cat: "cloud", icon: "📝" }
];

const mid = Math.ceil(techBadges.length / 2);
const row1Items = techBadges.slice(0, mid);
const row2Items = techBadges.slice(mid);

function renderMarqueeRow(container, items) {
    if (!container) return;
    container.innerHTML = '';
    const tripled = [...items, ...items, ...items];
    tripled.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'marquee-item';
        el.setAttribute('data-cat', item.cat);
        el.style.transitionDelay = `${(index % items.length) * 30}ms`;
        el.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="icon-wrapper">${item.icon}</span>
                <span class="tech-name">${item.name}</span>
            </div>
            <div class="glow-effect"></div>
        `;
        container.appendChild(el);
    });
}

const row1Container = document.getElementById('marquee-row-1');
const row2Container = document.getElementById('marquee-row-2');
if (row1Container && row2Container) {
    renderMarqueeRow(row1Container, row1Items);
    renderMarqueeRow(row2Container, row2Items);
}

const filterPills = document.querySelectorAll('#marquee-filters .filter-pill');
filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('filter-pill-active'));
        pill.classList.add('filter-pill-active');
        const cat = pill.getAttribute('data-cat');

        const marqueeItems = document.querySelectorAll('.marquee-item');
        marqueeItems.forEach(item => {
            const itemCat = item.getAttribute('data-cat');
            if (cat === 'all') {
                item.classList.remove('marquee-dimmed', 'marquee-highlighted');
            } else if (itemCat === cat) {
                item.classList.add('marquee-highlighted');
                item.classList.remove('marquee-dimmed');
            } else {
                item.classList.add('marquee-dimmed');
                item.classList.remove('marquee-highlighted');
            }
        });
    });
});


// ==========================================================================
// 3D TILT EFFECT ON CARDS
// ==========================================================================

const tiltCards = document.querySelectorAll('.tilted-card-container');
tiltCards.forEach(card => {
    const inner = card.querySelector('.tilted-card-inner');
    if (!inner) return;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xc = rect.width / 2;
        const yc = rect.height / 2;

        const rotateX = ((yc - y) / yc) * 10;
        const rotateY = ((x - xc) / xc) * 10;

        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        inner.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});


// ==========================================================================
// PROJECTS FILTER GRID
// ==========================================================================

const projectsFilterButtons = document.querySelectorAll('#projects-filter-bar button');
const projectsCards = document.querySelectorAll('.project-card-wrapper');

projectsFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        projectsFilterButtons.forEach(b => {
            b.classList.remove('bg-cyan-500', 'text-slate-900');
            b.classList.add('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
        });
        btn.classList.add('bg-cyan-500', 'text-slate-900');
        btn.classList.remove('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');

        const filter = btn.getAttribute('data-filter');

        projectsCards.forEach(card => {
            const stacks = card.getAttribute('data-stack').split(',');
            if (filter === 'all' || stacks.includes(filter)) {
                card.style.display = 'block';
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.4s ease';
                    card.style.opacity = '1';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// ==========================================================================
// TIMELINE SCROLL VERTICAL PROGRESS FILLER
// ==========================================================================

const timelineContainer = document.getElementById('timeline-container');
const progressLine = document.getElementById('timeline-progress-line');

window.addEventListener('scroll', () => {
    if (!timelineContainer || !progressLine) return;
    const rect = timelineContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight * 0.8;
    const end = windowHeight * 0.2;

    const containerHeight = rect.height;
    const containerTop = rect.top;

    let progress = (start - containerTop) / (start - end + containerHeight - 200);
    progress = Math.max(0, Math.min(1, progress));

    progressLine.style.transform = `scaleY(${progress})`;
});


// ==========================================================================
// CONTACT FORM SUBMISSION HANDLER & EMAIL COPYING
// ==========================================================================

const contactForm = document.getElementById('main-contact-form');
const submitBtn = document.getElementById('submit-form-btn');

if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="relative z-10 flex items-center gap-2">Sending... <span class="animate-spin">⏳</span></span>';

        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok && result.success) {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            } else {
                alert(result.error || 'Oops! There was a problem sending your message. Please try again.');
            }
        } catch (error) {
            alert('Oops! Network error occurred or the local server is not running.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
}

const copyEmailBtn = document.getElementById('copy-email-btn');
const toast = document.getElementById('email-copied-toast');
if (copyEmailBtn && toast) {
    copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('guhanchinnasamy5801@gmail.com').then(() => {
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 2000);
        });
    });
}


// ==========================================================================
// MOBILE MENU TOGGLE
// ==========================================================================

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

