// Post table of contents: marks the section in view and runs current along the trace
// to the reader's place. While the reader scrolls, --toc-live rises and decays with
// the same timing as the scroll material (material.js), so the trace wakes with the page.
// Swup reruns this script on each post view; a stale run tears itself down.
(function () {
    var nav = document.querySelector(".post-toc");
    if (!nav) return;
    var list = nav.querySelector(".post-toc-list");
    var links = [].slice.call(list.querySelectorAll("a"));
    var heads = links.map(function (a) { return document.getElementById(decodeURIComponent(a.hash.slice(1))); });
    if (heads.indexOf(null) !== -1) return;
    var body = nav.closest(".post-body");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    var IDLE = 150;      // scroll-idle
    var RISE_TAU = 70;   // ~200ms to full (material-rise)
    var DECAY_TAU = 250; // ~750ms back to rest (material-decay)

    var active = -1, fill = -1, level = 0, lastScroll = -Infinity, lastY = window.scrollY;
    var prev = 0, raf = 0, measure = 0;

    // The reading line sits a third of the way down the viewport.
    function place() {
        measure = 0;
        if (!nav.offsetParent) return; // hidden under the width breakpoint
        var line = window.innerHeight / 3;
        var i = -1;
        for (var k = 0; k < heads.length; k++) {
            if (heads[k].getBoundingClientRect().top <= line) i = k;
        }
        var y = 0;
        if (i >= 0) {
            var top = heads[i].getBoundingClientRect().top;
            var end = i + 1 < heads.length ? heads[i + 1].getBoundingClientRect().top : body.getBoundingClientRect().bottom;
            var frac = Math.max(0, Math.min(1, (line - top) / Math.max(1, end - top)));
            var from = via(i);
            var to = i + 1 < links.length ? via(i + 1) : list.scrollHeight;
            y = from + (to - from) * frac;
        }
        if (i !== active) {
            if (active >= 0) links[active].removeAttribute("aria-current");
            if (i >= 0) {
                links[i].setAttribute("aria-current", "location");
                keepInView(links[i]);
            }
            active = i;
        }
        if (Math.abs(y - fill) > 0.5) {
            list.style.setProperty("--toc-fill", y.toFixed(1) + "px");
            fill = y;
        }
    }

    // Center of an entry's via, in list coordinates.
    function via(i) {
        var a = links[i];
        return a.offsetTop + parseFloat(getComputedStyle(a).paddingTop) + parseFloat(getComputedStyle(a).fontSize) * 0.7;
    }

    // A long list scrolls inside itself; keep the active entry visible.
    function keepInView(a) {
        if (list.scrollHeight <= list.clientHeight) return;
        var t = a.offsetTop, b = t + a.offsetHeight;
        if (t < list.scrollTop || b > list.scrollTop + list.clientHeight) {
            list.scrollTop = t - list.clientHeight / 3;
        }
    }

    function frame(now) {
        var dt = Math.min(now - prev, 64);
        prev = now;
        if (now - lastScroll < IDLE) {
            level += (1 - level) * (1 - Math.exp(-dt / RISE_TAU));
        } else {
            level *= Math.exp(-dt / DECAY_TAU);
        }
        if (level < 0.005 && now - lastScroll >= IDLE) {
            list.style.setProperty("--toc-live", "0");
            level = 0;
            raf = 0;
            return;
        }
        list.style.setProperty("--toc-live", level.toFixed(3));
        raf = requestAnimationFrame(frame);
    }

    function onScroll() {
        if (!nav.isConnected) return teardown();
        if (!measure) measure = requestAnimationFrame(place);
        var y = window.scrollY, dy = Math.abs(y - lastY);
        lastY = y;
        // Anchor jumps and page transitions are not the reader scrolling.
        if (reduce.matches || dy === 0 || dy > window.innerHeight) return;
        if (document.documentElement.classList.contains("is-changing")) return;
        lastScroll = performance.now();
        if (!raf) {
            prev = lastScroll;
            raf = requestAnimationFrame(frame);
        }
    }

    function onResize() {
        if (!nav.isConnected) return teardown();
        if (!measure) measure = requestAnimationFrame(place);
    }

    // Glide to the section; the scroll wakes the trace on the way. Reduced motion jumps.
    function onClick(e) {
        var a = e.target.closest("a");
        if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        var head = heads[links.indexOf(a)];
        if (!head) return;
        e.preventDefault();
        head.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth", block: "start" });
        if (location.hash !== a.hash) history.pushState(null, "", a.hash);
        if (!head.hasAttribute("tabindex")) head.setAttribute("tabindex", "-1");
        head.focus({ preventScroll: true });
    }

    function teardown() {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(raf);
        cancelAnimationFrame(measure);
    }

    list.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    place();
})();
