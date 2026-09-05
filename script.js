// Zsurf Apps - Premium Interactivity

// Zsurf Browser Logo Config
const ZSURF_LOGO = '<img src="Zsurf Browser.png" alt="Zsurf" style="width: 100%; height: 100%; object-fit: contain;">';

// Store Configuration
const APP_STORES = [
    {
        name: 'Google Play',
        icon: ZSURF_LOGO,
        label: 'GET IT ON',
        url: 'https://play.google.com/store/apps/details?id=com.browser.zsurf',
        available: true,
        color: '#01875f'
    },
    {
        name: 'App Store',
        icon: ZSURF_LOGO,
        label: 'Download on the',
        url: '#',
        available: false,
        color: '#000000'
    },
    {
        name: 'Amazon',
        icon: ZSURF_LOGO,
        label: 'Available at',
        url: '#',
        available: true,
        color: '#000000'
    },
    {
        name: 'AppGallery',
        icon: ZSURF_LOGO,
        label: 'Explore it on',
        url: '#',
        available: false,
        color: '#C7000B'
    },
    {
        name: 'Galaxy Store',
        icon: ZSURF_LOGO,
        label: 'Available on',
        url: '#',
        available: false,
        color: '#d4145a'
    },
    {
        name: 'Microsoft',
        icon: ZSURF_LOGO,
        label: 'Get from',
        url: '#',
        available: false,
        color: '#00a4ef'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderStoreButtons();
});

// View Navigation System
function initNavigation() {
    const appsSection = document.querySelector('.apps-section:not(.coming-section)');
    const comingSection = document.querySelector('.coming-section');
    const appDetail = document.getElementById('zsurf-browser');
    const mainAppParams = document.querySelectorAll('a[href="#zsurf-browser"]');
    const logoLink = document.querySelector('.logo');

    // Handle App Click
    mainAppParams.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide Lists
            appsSection.style.display = 'none';
            comingSection.style.display = 'none';
            // Show Detail
            appDetail.classList.add('active');
            window.scrollTo(0, 0);
        });
    });

    // Handle Logo/Home Click (Back to List)
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Show Lists
        appsSection.style.display = 'block';
        comingSection.style.display = 'block';
        // Hide Detail
        appDetail.classList.remove('active');
        window.scrollTo(0, 0);
    });
}

// Render Stores
function renderStoreButtons() {
    const container = document.getElementById('storesGrid');
    if (!container) return;

    container.innerHTML = APP_STORES.map(store => {
        // Create badge if not available
        const badge = !store.available ? `<span class="coming-soon-badge">Coming Soon</span>` : '';
        // Subtle border using the brand color
        const borderStyle = `border: 1px solid ${store.color}40; box-shadow: 0 1px 2px rgba(0,0,0,0.05);`;

        return `
        <a href="${store.url}" 
           class="store-btn ${store.available ? 'available' : 'coming-soon-btn'}"
           style="${borderStyle}; position: relative; overflow: hidden;"
           target="_blank">
            ${badge}
            <span class="store-icon">${store.icon}</span>
            <div class="store-info">
                <span class="store-label" style="color: #01875f; opacity: 0.8;">${store.label}</span>
                <span class="store-name" style="color: #01875f; font-weight: 600;">${store.name}</span>
            </div>
        </a>
    `}).join('');
}
