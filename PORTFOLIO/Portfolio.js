let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav ul li a'); 


window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => { 
                link.classList.remove('active'); 
            });
            document.querySelector('header nav ul li a[href*="' + id + '"]').classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function() {
    const text = "Front-end Developer";
    const typed = document.getElementById("typed");
    let i = 0;
    let isErasing = false;

    function typeWriter() {
        if (!typed) return;
        if (!isErasing && i <= text.length) {
            typed.textContent = text.slice(0, i);
            i++;
            setTimeout(typeWriter, 120);
        } else if (!isErasing) {
            isErasing = true;
            setTimeout(typeWriter, 1500);
        } else if (isErasing && i > 0) {
            typed.textContent = text.slice(0, i);
            i--;
            setTimeout(typeWriter, 60); 
        } else if (isErasing && i === 0) {
            typed.textContent = "";
            isErasing = false;
            setTimeout(typeWriter, 600); 
        }
    }
    typeWriter();
});


