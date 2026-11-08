// Renders [data-tex] elements with KaTeX (loaded only on pages with `extra.math = true`).
document.addEventListener("DOMContentLoaded", function () {
    if (!window.katex) return;
    document.querySelectorAll("[data-tex]").forEach(function (el) {
        window.katex.render(el.dataset.tex, el, { displayMode: true, throwOnError: false });
    });
});
