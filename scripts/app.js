// Dropdown Menu Showing/Hiding
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_

function dropNavMenu() {
    document.getElementById('nav-dropdown').classList.toggle('hide');
    document.getElementById('nav-dropdown').classList.toggle('show');
}

window.onclick = function(e) {
    if (!e.target.matches('#nav-menu-icn')) {
        let dropdowns = document.getElementById('nav-dropdown');
        if (dropdowns.classList.contains('show')) {
            dropdowns.classList.remove('show');
            dropdowns.classList.add('hide');
        }
    }
}
