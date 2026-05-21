/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Move the homepage spotlight with the cursor.
    const portfolioHero = document.querySelector('.portfolio-hero');
    if (portfolioHero && window.matchMedia('(pointer: fine)').matches) {
        portfolioHero.addEventListener('pointermove', event => {
            const rect = portfolioHero.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            portfolioHero.style.setProperty('--cursor-x', `${x}px`);
            portfolioHero.style.setProperty('--cursor-y', `${y}px`);
            portfolioHero.classList.add('is-cursor-active');
        });

        portfolioHero.addEventListener('pointerleave', () => {
            portfolioHero.classList.remove('is-cursor-active');
        });
    }

    const portfolioGreeting = document.querySelector('.portfolio-greeting');
    if (portfolioGreeting) {
        const switchGreeting = text => {
            portfolioGreeting.classList.add('is-switching');

            window.setTimeout(() => {
                portfolioGreeting.textContent = text;
                portfolioGreeting.classList.remove('is-switching');
            }, 160);
        };

        portfolioGreeting.addEventListener('pointerenter', () => {
            switchGreeting(portfolioGreeting.dataset.zh);
        });

        portfolioGreeting.addEventListener('pointerleave', () => {
            switchGreeting(portfolioGreeting.dataset.en);
        });
    }

});
