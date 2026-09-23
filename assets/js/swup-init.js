const swup = new Swup({
    plugins: [new SwupScriptsPlugin()]
});

// update nav links
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

// lazyload
function lazyLoad() {
    var lazyLoadInstance = new LazyLoad({});

    // find all lazy-loaded images and iframes
    const lazyElements = document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"], video[class="lazy"]');

    lazyElements.forEach((el) => {
        // add a loading class to elements
        if(!el.classList.contains("lazy")){
            el.classList.add("lazy");
        }

        // listen for the load event
        el.addEventListener("load", () => {
            el.classList.remove("lazy");
        });
        el.addEventListener("loadeddata", () => {
            el.classList.remove("lazy");
        });

        // for cached images that are already loaded
        if (el.complete) {
            el.classList.remove("lazy");
        }
    });
}

// scrim reveal: clip long content behind a fade that expands it on click
function initScrims() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll(".scrim-clip:not([data-scrim-ready])").forEach(function (box) {
        box.setAttribute("data-scrim-ready", "");
        box.classList.add("is-clipped");
        // Nothing hidden worth revealing: show it all.
        if (box.scrollHeight <= box.clientHeight + 24) {
            box.classList.remove("is-clipped");
            return;
        }
        var trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "scrim-trigger";
        trigger.setAttribute("aria-expanded", "false");
        if (box.id) trigger.setAttribute("aria-controls", box.id);
        trigger.innerHTML =
            '<span class="scrim-plus" aria-hidden="true"><svg viewBox="0 0 16 16" width="10" height="10" focusable="false">' +
            '<path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/></svg></span>' +
            '<span class="scrim-sr">Show full ' + (box.dataset.scrimLabel || "content") + "</span>";
        trigger.addEventListener("click", function () {
            trigger.remove();
            box.setAttribute("tabindex", "-1");
            box.focus({ preventScroll: true });
            if (reduce) {
                box.classList.remove("is-clipped");
                return;
            }
            // Animate from the clipped height to the full height, then release.
            box.style.maxHeight = box.clientHeight + "px";
            box.classList.remove("is-clipped");
            box.classList.add("is-expanding");
            requestAnimationFrame(function () {
                box.style.maxHeight = box.scrollHeight + "px";
            });
            var release = function () {
                box.classList.remove("is-expanding");
                box.style.maxHeight = "";
            };
            box.addEventListener("transitionend", release, { once: true });
            setTimeout(release, 700);
        });
        box.appendChild(trigger);
    });
}

// first load
document.addEventListener("DOMContentLoaded", (event) => {
    updateNavLinks();
    lazyLoad();
    initScrims();
});

// on transitions
swup.hooks.on('page:view', () => {
    updateNavLinks();
    lazyLoad();
    initScrims();
    if (typeof refreshFsLightbox === 'function') {
        refreshFsLightbox();
    }
    if (typeof twttr !== 'undefined' && twttr.widgets) {
        twttr.widgets.load();
    }
    if (typeof window.closeSearch === 'function') {
        window.closeSearch();
    }
});

//reload on orientation change
window.addEventListener("orientationchange", function () {
    window.location.reload()
}, false);
