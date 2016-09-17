(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var menu = document.querySelector(".j-menu");
        var nav = document.querySelector(".nav");
        menu.addEventListener("click", function () {
            nav.classList.toggle("show");
        }, false);
    }, false);

    hljs.initHighlightingOnLoad();
})();

(function($) {
    $('img').each(function() {
        $(this).attr("data-action", "zoom");
    });
})(Zepto);