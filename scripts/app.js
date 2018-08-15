// Dropdown Menu Showing/Hiding
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_

function dropNavMenu() {
    document.getElementById('nav-dropdown').classList.toggle('hide');
    document.getElementById('nav-dropdown').classList.toggle('show');
}

function showShortVersion() {
    document.getElementById('about-story-long').classList.remove('nav-clicked');
    document.getElementById('about-story-short').classList.add('nav-clicked');
    document.getElementById('my-story-wrapper').style.display = 'none';
    document.getElementById('my-stats-wrapper').style.display = 'block';
}

function showLongVersion() {
    document.getElementById('about-story-short').classList.remove('nav-clicked');
    document.getElementById('about-story-long').classList.add('nav-clicked');
    document.getElementById('my-stats-wrapper').style.display = 'none';
    document.getElementById('my-story-wrapper').style.display = 'block';
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
