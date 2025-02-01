import Typed from "typed.js";
import Swup from "swup";

// Initialize Swup globally
const swup = new Swup();

// Function to initialize Typed.js
function initTyped() {
    // Intro hero (home layout)
    var titleElement = document.querySelector("#title");
    if (titleElement) {
        var heroIntroOptions = {
            strings: [
                "a&nbsp;designer.",
                "a&nbsp;developer.",
                "an&nbsp;artist.",
                "an&nbsp;entrepreneur.",
                "a&nbsp;coach.",
                "a&nbsp;tinkerer.",
                "a&nbsp;friend :)",
            ],
            typeSpeed: 32,
            backDelay: 3200,
            backSpeed: 32,
            showCursor: false,
            loop: true,
        };
        new Typed("#title", heroIntroOptions);
    }

    // 404 page
    var errorElement = document.querySelector("#error");
    if (errorElement) {
        var errorOptions = {
            strings: ["Searching", "Error: 404"],
            typeSpeed: 32,
            backDelay: 3200,
            backSpeed: 32,
            showCursor: true,
            cursorChar: "_",
        };
        new Typed("#error", errorOptions);
    }
}

// Run Typed.js on first page load
document.addEventListener("DOMContentLoaded", initTyped);

// Run Typed.js again after each Swup transition
swup.hooks.on('page:view', initTyped);