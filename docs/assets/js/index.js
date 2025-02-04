import Typed from "typed.js";
import Swup from "swup";
import SwupScriptsPlugin from '@swup/scripts-plugin';

// Initialize Swup globally
const swup = new Swup({
    plugins: [new SwupScriptsPlugin()]
});

// Update nav links
function updateNavLinks() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.site-nav .page-link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
}

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

function batchUpdates() {
    initTyped();
    updateNavLinks();
}

// Run Typed.js on first page load
document.addEventListener("DOMContentLoaded", batchUpdates);

// Run Typed.js again after each Swup transition
swup.hooks.on('page:view', batchUpdates);