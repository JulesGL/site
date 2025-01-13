document.querySelectorAll('.nav-list a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

function toggleMenu() {
    const menu = document.querySelector('.nav-list');
    menu.classList.toggle('open');
}