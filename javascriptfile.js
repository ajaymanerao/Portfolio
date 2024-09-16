document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarItems = document.getElementById('navbar-items');

    toggleButton.addEventListener('click', function() {
        if (navbarItems.classList.contains('show')) {
            navbarItems.classList.remove('show');
        } else {
            navbarItems.classList.add('show');
        }
    });
});