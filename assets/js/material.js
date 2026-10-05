// Scroll material: grid and glass surface while the reader scrolls, then decay to flat.
// One value, --material (0-1), drives everything in _material.scss. The loop runs only
// while the layer is live and writes one property to a handful of elements per frame.
(function () {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    var IDLE = 150;       // ms without scroll that counts as stopped (scroll-idle)
    var RISE_TAU = 70;    // ~200ms to full (material-rise)
    var DECAY_TAU = 250;  // ~750ms back to rest (material-decay)
    var MIN_LEVEL = 0.35; // a slow crawl still shows the layer
    var FULL_SPEED = 2;   // px/ms that reads as full intensity

    var root = document.documentElement;
    var grid = document.createElement("div");
    grid.className = "material-grid";
    grid.setAttribute("aria-hidden", "true");
    document.body.prepend(grid);

    // Phones with few cores get tint only; backdrop blur is the expensive part.
    if (window.matchMedia("(pointer: coarse)").matches && (navigator.hardwareConcurrency || 4) <= 4) {
        root.classList.add("material-lite");
    }

    var near = "IntersectionObserver" in window
        ? new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { e.target.classList.toggle("is-near", e.isIntersecting); });
        }, { rootMargin: "25% 0px" })
        : null;

    var targets = [grid];
    var level = 0, target = 0, written = 0;
    var lastY = window.scrollY, lastEvent = 0, lastScroll = -Infinity, prev = 0, raf = 0;

    // Swup swaps page content, so collect lists each time the layer wakes.
    function collect() {
        targets = [grid];
        document.querySelectorAll(".post-list").forEach(function (list) {
            targets.push(list);
            if (!near) return;
            list.querySelectorAll(":scope > li:not([data-material])").forEach(function (li) {
                li.setAttribute("data-material", "");
                near.observe(li);
            });
        });
        if (!near) targets.forEach(function (t) {
            if (t !== grid) t.querySelectorAll(":scope > li").forEach(function (li) { li.classList.add("is-near"); });
        });
    }

    function write(value) {
        var v = value.toFixed(3);
        for (var i = 0; i < targets.length; i++) targets[i].style.setProperty("--material", v);
        written = value;
    }

    function frame(now) {
        var dt = Math.min(now - prev, 64);
        prev = now;
        if (now - lastScroll < IDLE) {
            level += (target - level) * (1 - Math.exp(-dt / RISE_TAU));
        } else {
            level *= Math.exp(-dt / DECAY_TAU);
        }
        if (level < 0.005 && now - lastScroll >= IDLE) {
            level = 0;
            write(0);
            root.classList.remove("is-material");
            raf = 0;
            return;
        }
        if (Math.abs(level - written) > 0.002) write(level);
        raf = requestAnimationFrame(frame);
    }

    function onScroll() {
        var now = performance.now();
        var y = window.scrollY;
        var prevY = lastY;
        var dy = Math.abs(y - prevY);
        var dt = Math.max(now - lastEvent, 8);
        lastY = y;
        lastEvent = now;
        // Page transitions and anchor jumps are not the reader scrolling.
        if (reduce.matches || root.classList.contains("is-changing") || dy > window.innerHeight) return;
        if (dy === 0) return;
        var dir = y > prevY ? "down" : "up";
        if (root.dataset.scrollDir !== dir) root.dataset.scrollDir = dir;
        target = MIN_LEVEL + (1 - MIN_LEVEL) * Math.min(1, dy / dt / FULL_SPEED);
        lastScroll = now;
        if (!raf) {
            // Browse pages only: reading pages (posts, case studies, About) stay plain.
            if (!document.querySelector(".post-list")) return;
            collect();
            root.classList.add("is-material");
            prev = now;
            raf = requestAnimationFrame(frame);
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
})();
