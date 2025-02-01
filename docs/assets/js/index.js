import Typed from "typed.js";

document.addEventListener("DOMContentLoaded", function () {
    var titleElement = document.querySelector("#title");
    if (titleElement) {
        var heroIntroOptions = {
            strings: ['a&nbsp;designer.', 'a&nbsp;developer.', 'an&nbsp;artist.', 'an&nbsp;entrepreneur.', 'a&nbsp;coach.', 'a&nbsp;tinkerer.', 'a&nbsp;friend :)'],
            typeSpeed: 32,
            backDelay: 3200,
            backSpeed: 32,
            showCursor: false,
            loop: true
        };
        new Typed("#title", heroIntroOptions);
    }

    var errorElement = document.querySelector("#error");
    if (errorElement) {
        var errorOptions = {
            strings: ['Searching', 'Error: 404'],
            typeSpeed: 32,
            backDelay: 3200,
            backSpeed: 32,
            showCursor: true,
            cursorChar: '_'
        };
        new Typed("#error", errorOptions);
    }
});