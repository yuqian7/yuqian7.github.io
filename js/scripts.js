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
        const floatingSphere = portfolioHero.querySelector('.floating-sphere');
        let heroRotateX = 0;
        let heroRotateY = 0;
        let targetHeroRotateX = 0;
        let targetHeroRotateY = 0;

        const updateSphere = () => {
            heroRotateX += (targetHeroRotateX - heroRotateX) * 0.1;
            heroRotateY += (targetHeroRotateY - heroRotateY) * 0.1;

            portfolioHero.style.setProperty('--hero-rotate-x', `${heroRotateX.toFixed(2)}deg`);
            portfolioHero.style.setProperty('--hero-rotate-y', `${heroRotateY.toFixed(2)}deg`);

            window.requestAnimationFrame(updateSphere);
        };

        if (floatingSphere) {
            updateSphere();
        }

        portfolioHero.addEventListener('pointermove', event => {
            const rect = portfolioHero.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            portfolioHero.style.setProperty('--cursor-x', `${x}px`);
            portfolioHero.style.setProperty('--cursor-y', `${y}px`);
            portfolioHero.classList.add('is-cursor-active');

            if (floatingSphere) {
                const sphereCenterX = floatingSphere.offsetLeft + floatingSphere.offsetWidth / 2;
                const sphereCenterY = floatingSphere.offsetTop + floatingSphere.offsetHeight / 2;
                const sphereX = x - sphereCenterX;
                const sphereY = y - sphereCenterY;

                floatingSphere.style.setProperty('--sphere-x', `${sphereX.toFixed(2)}px`);
                floatingSphere.style.setProperty('--sphere-y', `${sphereY.toFixed(2)}px`);
            }

            targetHeroRotateX = -((y / rect.height) - 0.5) * 56;
            targetHeroRotateY = ((x / rect.width) - 0.5) * 72;
        });

        portfolioHero.addEventListener('pointerleave', () => {
            portfolioHero.classList.remove('is-cursor-active');
            if (floatingSphere) {
                floatingSphere.style.setProperty('--sphere-x', '0px');
                floatingSphere.style.setProperty('--sphere-y', '0px');
            }
            targetHeroRotateX = 0;
            targetHeroRotateY = 0;
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

    const hoverCards = document.querySelectorAll('.hover-card');
    if (hoverCards.length && window.matchMedia('(pointer: fine)').matches) {
        hoverCards.forEach(card => {
            card.addEventListener('pointermove', event => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--hover-x', `${event.clientX - rect.left}px`);
                card.style.setProperty('--hover-y', `${event.clientY - rect.top}px`);
            });
        });
    }

});
