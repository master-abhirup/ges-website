// ==========================================
// 1. DYNAMIC 3-DAY SCHEDULE (Tabs Logic)
// ==========================================
function showDay(dayId) {
    // Grab every HTML element that has the class "day-content"
    const allDays = document.querySelectorAll('.day-content');
    
    // Loop through them and hide them all
    allDays.forEach(function(day) {
        day.style.display = 'none';
    });
    
    // Find the specific day the user clicked and show only that one
    document.getElementById(dayId).style.display = 'block';
}


// ==========================================
// 2. HERO SECTION TIMER (Countdown Logic)
// ==========================================
// Set a future date for the summit (e.g., January 1, 2027)
const summitDate = new Date("Jan 1, 2027 10:00:00").getTime();

// Run this function every 1000 milliseconds (1 second)
const timer = setInterval(function() {
    
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the summit date
    const distance = summitDate - now;

    // Mathematical calculations to convert milliseconds into days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Inject the calculated text directly into our HTML <p id="countdown"> element
    document.getElementById("countdown").innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, stop the timer and display a message
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerText = "THE SUMMIT HAS BEGUN!";
    }
    
}, 1000);