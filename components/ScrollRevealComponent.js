import React, { useEffect } from 'react';

const ScrollRevealComponent = ({ children }) => {
    useEffect(() => {
        // Check if window is defined to ensure code runs only in the browser
        if (typeof window !== 'undefined') {
            // Import ScrollReveal dynamically
            import('scrollreveal').then((module) => {
                const ScrollReveal = module.default; // Get the default export of the module
                ScrollReveal().reveal('.scroll-reveal', {
                    delay: 500,
                    distance: '20px',
                    duration: 1000,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)',
                    origin: 'bottom',
                    reset: true,
                    scale: 0.8
                });
            }).catch((error) => {
                console.error('Error importing ScrollReveal:', error);
            });
        }
    }, []);

    return <div className="scroll-reveal">{children}</div>;
};

export default ScrollRevealComponent;
