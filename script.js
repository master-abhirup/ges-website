/* ==========================================
   1. COUNTDOWN TIMER LOGIC
========================================== */
const countdownElement = document.getElementById('countdown');
// Target Date set strictly to 30th January 2027
const targetDate = new Date('January 30, 2027 10:00:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "The Summit Has Begun!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

/* ==========================================
   2. SCHEDULE TABS LOGIC
========================================== */
function showDay(dayId, btnElement) {
    const days = document.querySelectorAll('.day-content');
    days.forEach(day => {
        day.style.display = 'none';
        day.classList.remove('show-element'); 
    });

    const buttons = document.querySelectorAll('.tabs button');
    buttons.forEach(btn => {
        btn.classList.remove('active-btn');
    });

    if (btnElement) {
        btnElement.classList.add('active-btn');
    }

    const activeDay = document.getElementById(dayId);
    activeDay.style.display = 'block';
    
    setTimeout(() => {
        activeDay.classList.add('show-element');
    }, 50);
}

/* ==========================================
   3. SMART NAVIGATION BAR (Hide on Scroll)
========================================== */
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling Down
        navbar.style.top = "-100px"; 
    } else {
        // Scrolling Up
        navbar.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});

/* ==========================================
   4. SCROLL REVEAL ANIMATION (Intersection Observer)
========================================== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
}, {
    threshold: 0.1 
});

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));

/* ==========================================
   5. DYNAMIC IMAGE CAROUSEL (Cross-Fade)
========================================== */
const slides = document.querySelectorAll('.carousel-img');
let currentSlide = 0;

if (slides.length > 0) {
    setInterval(() => {
        // Remove the active class from the current image
        slides[currentSlide].classList.remove('active-slide');
        
        // Move to the next image (and loop back to 0 if at the end)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add the active class to the new image
        slides[currentSlide].classList.add('active-slide');
    }, 3000); // Changes image every 3 seconds
}