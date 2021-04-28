function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {

    document.querySelector('.mobile-menu-button').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.mobile-menu').classList.toggle('active');
    });

});