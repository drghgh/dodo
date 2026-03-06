document.addEventListener('DOMContentLoaded', () => {
    // 1. Session & Auth Check
    const path = window.location.pathname;
    const isLoginPage = path.includes('index.html') || path === '/' || path.endsWith('/');
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn && !isLoginPage && !path.includes('admin.html')) {
        window.location.href = 'index.html';
    }

    // 2. Initialize Global Background Effects
    initGlobalBackground();
});

function initGlobalBackground() {
    // Create Containers
    const heartsContainer = document.createElement('div');
    heartsContainer.style.zIndex = '9999';
    document.body.appendChild(heartsContainer);

    const starsContainer = document.createElement('div');
    starsContainer.id = 'starsContainer';
    starsContainer.style.position = 'fixed';
    starsContainer.style.top = '0';
    starsContainer.style.left = '0';
    starsContainer.style.width = '100vw';
    starsContainer.style.height = '100vh';
    starsContainer.style.zIndex = '0';
    starsContainer.style.pointerEvents = 'none';
    document.body.prepend(starsContainer);

    // Create Stars (Starry Night effect)
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 5 + 's';
        starsContainer.appendChild(star);
    }

    // Floating Hearts generator
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤️';
        const size = Math.random() * 20 + 10 + 'px';
        heart.style.fontSize = size;
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 4 + 4 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.2;

        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 600);
}
