document.addEventListener('DOMContentLoaded', function() {
    initMobileNavigation();
    initCookieNotice();
    initBackToTop();
});

// Mobile Navigation with Mega Menu
function initMobileNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const megaMenu = document.querySelector('.mega-menu');
    const closeBtn = document.querySelector('.close-btn');
    const mainNav = document.querySelector('.main-nav');

    // Check if elements exist
    if (!mobileMenuBtn || !megaMenu || !closeBtn || !mainNav) {
        console.error('Navigation elements missing:', { mobileMenuBtn, megaMenu, closeBtn, mainNav });
        return;
    }

    // Toggle mega menu on hamburger click
    mobileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        megaMenu.classList.toggle('active');
        document.body.classList.toggle('nav-active');
        const isActive = megaMenu.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isActive);
        console.log('Mega menu toggled:', isActive);
    });

    // Close mega menu on close button click
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        megaMenu.classList.remove('active');
        document.body.classList.remove('nav-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        console.log('Mega menu closed');
    });

    // Populate mega menu content dynamically
    const megaMenuContent = megaMenu.querySelector('.mega-menu-content');
    if (!megaMenuContent) {
        console.error('Mega menu content container not found');
        return;
    }

    mainNav.querySelectorAll('li').forEach(item => {
        const column = document.createElement('div');
        column.className = 'mega-menu-column';

        if (item.classList.contains('dropdown')) {
            const toggle = item.querySelector('.dropdown-toggle');
            const menu = item.querySelector('.dropdown-menu');

            if (!toggle || !menu) {
                console.warn('Dropdown toggle or menu missing for item:', item);
                return;
            }

            const title = document.createElement('h3');
            title.textContent = toggle.textContent.replace(/▼|\s*<i.*<\/i>/gi, '').trim();
            column.appendChild(title);

            const ul = document.createElement('ul');
            menu.querySelectorAll('li').forEach(li => {
                const liClone = document.createElement('li');
                const a = li.querySelector('a');
                const btn = li.querySelector('.apply-btn');

                if (a) {
                    const aClone = document.createElement('a');
                    aClone.href = a.href;
                    aClone.textContent = a.textContent;
                    liClone.appendChild(aClone);
                }

                if (btn) {
                    const btnClone = document.createElement('button');
                    btnClone.className = 'apply-btn';
                    btnClone.textContent = btn.textContent;
                    liClone.appendChild(btnClone);
                }

                ul.appendChild(liClone);
            });
            column.appendChild(ul);
        } else {
            const a = item.querySelector('a');
            if (!a) {
                console.warn('Link missing for non-dropdown item:', item);
                return;
            }

            const title = document.createElement('h3');
            title.textContent = a.textContent.trim();
            column.appendChild(title);

            const ul = document.createElement('ul');
            const li = document.createElement('li');
            const aClone = document.createElement('a');
            aClone.href = a.href;
            aClone.textContent = a.textContent;
            li.appendChild(aClone);
            ul.appendChild(li);
            column.appendChild(ul);
        }

        megaMenuContent.appendChild(column);
    });

    // Close mega menu on link click
    megaMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            megaMenu.classList.remove('active');
            document.body.classList.remove('nav-active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            console.log('Link clicked, mega menu closed');
        });
    });

    // Prevent apply button from closing the menu
    megaMenu.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Apply button clicked');
        });
    });
}

// Cookie Notice
function initCookieNotice() {
    const cookieNotice = document.getElementById('cookie-notice');
    const cookieAccept = document.getElementById('cookie-accept');

    if (!cookieNotice || !cookieAccept) {
        console.error('Cookie notice elements missing:', { cookieNotice, cookieAccept });
        return;
    }

    // Function to get a cookie by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        console.log('Cookies found:', document.cookie);
        if (parts.length === 2) {
            const cookieValue = parts.pop().split(';').shift();
            console.log(`Cookie ${name} value:`, cookieValue);
            return cookieValue;
        }
        console.log(`Cookie ${name} not found`);
        return null;
    }

    // Function to set a cookie with minimal attributes
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        // Minimal attributes for maximum compatibility
        const cookieString = `${name}=${value}; expires=${date.toUTCString()}`;
        document.cookie = cookieString;
        console.log('Cookie set:', cookieString);
    }

    // Check if cookieConsent cookie exists
    const consent = getCookie('cookieConsent');
    if (consent === 'accepted') {
        cookieNotice.style.display = 'none';
        console.log('Cookie notice hidden due to existing consent');
    } else {
        cookieNotice.classList.add('active');
        console.log('Cookie notice displayed');
    }

    // Handle accept button click
    cookieAccept.addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365);
        cookieNotice.classList.remove('active');
        cookieNotice.style.display = 'none';
        console.log('Cookie consent accepted, notice hidden');
        // Verify cookie was set
        const verifyConsent = getCookie('cookieConsent');
        console.log('Post-accept cookie check:', verifyConsent);
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.querySelector('#back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}