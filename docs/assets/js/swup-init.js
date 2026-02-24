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

// first load
document.addEventListener("DOMContentLoaded", (event) => {
    updateNavLinks();
    lazyLoad();
});

// on transitions
swup.hooks.on('page:view', () => {
    updateNavLinks();
    lazyLoad();
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
