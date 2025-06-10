document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    const logoLink = document.querySelector('.logo');
    const header = document.querySelector('.header');
    const barsBox = document.querySelector('.bars-box');
    const sections = document.querySelectorAll('section');
    const resumeBtns = document.querySelectorAll('.resume-btn');
    const resumeDetails = document.querySelectorAll('.resume-detail');
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('header nav');


    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    })

    // Check if the header exists and add initial 'active' class
    if (header) {
        header.classList.remove('active');
        setTimeout(() => {
            header.classList.add('active');
        }, 500);
    } else {
        console.warn('Header element not found.');
    }

    // Function to add 'active' class to header and sections with a delay
    const delayedLoad = (element, delay) => {
        if (element) {
            setTimeout(() => {
                element.classList.add('active');
            }, delay);
        } else {
            console.warn('Element not found for delayed load.');
        }
    };

    // Delay loading for the header and barsBox
    delayedLoad(header, 200);
    delayedLoad(barsBox, 200);

    // Function to remove 'active' class and re-add after a delay
    const activePage = () => {
        if (header) {
            header.classList.remove('active');
            setTimeout(() => {
                header.classList.add('active');
            }, 500);
        } else {
            console.warn('Header element not found.');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        if (barsBox) {
            barsBox.classList.remove('active');
            setTimeout(() => {
                barsBox.classList.add('active');
            }, 500);
        } else {
            console.warn('BarsBox element not found.');
        }

        sections.forEach(section => {
            section.classList.remove('active');
        });

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

    };

    // Event listener for navigation links
    if (navLinks.length > 0) {
        navLinks.forEach((link, idx) => {
            link.addEventListener('click', () => {
                if (!link.classList.contains('active')) {
                    activePage();
                    link.classList.add('active');

                    setTimeout(() => {
                        sections[idx].classList.add('active');
                    }, 500);
                }
            });
        });
    } else {
        console.warn('No navigation links found.');
    }

    // Event listener for the logo link
    if (logoLink) {
        logoLink.addEventListener('click', () => {
            if (!navLinks[0]?.classList.contains('active')) {
                activePage();
                if (navLinks[0]) {
                    navLinks[0].classList.add('active');
                    if (sections[0]) {
                        setTimeout(() => {
                            sections[0].classList.add('active');
                        }, 500);
                    }
                }
            }
        });
    } else {
        console.warn('Logo link element not found.');
    }

    // Function to handle active state for resume buttons
    const setDefaultActiveResumeSection = () => {
        if (resumeBtns.length > 0 && resumeDetails.length > 0) {
            resumeBtns[0].classList.add('active');
            resumeDetails[0].classList.add('active');
        }
    };

    // Initialize default active resume section on page load
    setDefaultActiveResumeSection();

    // Handle the resume buttons click event
    if (resumeBtns.length > 0) {
        resumeBtns.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                resumeBtns.forEach(btn => {
                    btn.classList.remove('active');
                });
                btn.classList.add('active');

                resumeDetails.forEach(detail => {
                    detail.classList.remove('active');
                });
                if (resumeDetails[idx]) {
                    resumeDetails[idx].classList.add('active');
                }
            });
        });
    } else {
        console.warn('No resume buttons found.');
    }

    // Select the navigation arrows for the portfolio carousel
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
    let index = 0;
    const maxIndex = 5; // Adjust this if your portfolio has more/less slides

    // Function to activate the portfolio slide
    const activeportfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');

        if (imgSlide) {
            imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
        } else {
            console.warn('imgSlide element not found.');
        }

        portfolioDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        if (portfolioDetails[index]) {
            portfolioDetails[index].classList.add('active');
        }

        // Update the state of the arrows
        if (arrowLeft) {
            if (index <= 0) {
                arrowLeft.classList.add('disabled');
            } else {
                arrowLeft.classList.remove('disabled');
            }
        } else {
            console.warn('arrowLeft element not found.');
        }

        if (arrowRight) {
            if (index >= maxIndex) {
                arrowRight.classList.add('disabled');
            } else {
                arrowRight.classList.remove('disabled');
            }
        } else {
            console.warn('arrowRight element not found.');
        }
    };

    // Add event listeners to the navigation arrows
    if (arrowRight) {
        arrowRight.addEventListener('click', () => {
            if (index < maxIndex) {
                index++;
            }
            activeportfolio();
        });
    } else {
        console.warn('arrowRight element not found.');
    }

    if (arrowLeft) {
        arrowLeft.addEventListener('click', () => {
            if (index > 0) {
                index--;
            }
            activeportfolio();
        });
    } else {
        console.warn('arrowLeft element not found.');
    }

    // Initial state check for the arrows
    activeportfolio();
});
