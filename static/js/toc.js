// Highlights the table-of-contents entry of the heading currently being read.
(function () {
    var links = Array.prototype.slice.call(document.querySelectorAll(".article-toc .toc__link"));
    var headings = links
        .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
        .filter(Boolean);
    if (!headings.length || !("IntersectionObserver" in window)) return;

    function update() {
        var current = headings[0];
        headings.forEach(function (h) {
            if (h.getBoundingClientRect().top < 120) current = h;
        });
        links.forEach(function (a) {
            if (a.getAttribute("href") === "#" + current.id) a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
        });
    }

    var observer = new IntersectionObserver(update, { rootMargin: "0px 0px -60% 0px", threshold: [0, 1] });
    headings.forEach(function (h) { observer.observe(h); });
    update();
})();
