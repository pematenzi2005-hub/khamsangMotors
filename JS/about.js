let menu = document.getElementById("menu");
function Menu(){
menu.classList.toggle("active");
}

/**
 * Smooth Scroll-Activated Number Counter
 * Uses IntersectionObserver for trigger and requestAnimationFrame for smooth visuals.
 */
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000; 
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            
          
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
           
            element.innerText = Math.floor(progress * target);

           
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.innerText = target; 
            }
        };

        window.requestAnimationFrame(step);
    };

    
    const observerOptions = {
        root: null, 
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
});