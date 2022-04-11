// SET DATE
// SELECT SPAN
const date = (document.getElementById('date').innerHTML = new Date().getFullYear());

// NAV TOGGLE
// SELECT BUTTONS AND LINKS
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
// ADD EVENT LISTENER
navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links')
});

// SMOOTH SCROLL
// SELECT LINKS
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        // prevent default
        e.preventDefault();
        links.classList.remove('show-links');

        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        //
        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            // top: element.offsetTop,
            top: position,
            behavior: "smooth"
        });
    });
});