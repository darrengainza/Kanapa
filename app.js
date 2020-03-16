const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {

        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // link.getElementsByClassName.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.5}s`;
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

}



document.getElementById('button-report').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('button-report-1').addEventListener("click", function() {
	document.querySelector('.bg-modal-1').style.display = "flex";
});

document.querySelector('.close-1').addEventListener("click", function() {
	document.querySelector('.bg-modal-1').style.display = "none";
});

document.getElementById('button-report-2').addEventListener("click", function() {
	document.querySelector('.bg-modal-2').style.display = "flex";
});

document.querySelector('.close-2').addEventListener("click", function() {
	document.querySelector('.bg-modal-2').style.display = "none";
});

document.getElementById('button-report-3').addEventListener("click", function() {
	document.querySelector('.bg-modal-3').style.display = "flex";
});

document.querySelector('.close-3').addEventListener("click", function() {
	document.querySelector('.bg-modal-3').style.display = "none";
});

document.getElementById('button-report-4').addEventListener("click", function() {
	document.querySelector('.bg-modal-4').style.display = "flex";
});

document.querySelector('.close-4').addEventListener("click", function() {
	document.querySelector('.bg-modal-4').style.display = "none";
});

document.getElementById('button-report-5').addEventListener("click", function() {
	document.querySelector('.bg-modal-5').style.display = "flex";
});

document.querySelector('.close-5').addEventListener("click", function() {
	document.querySelector('.bg-modal-5').style.display = "none";
});

document.getElementById('button-report-6').addEventListener("click", function() {
	document.querySelector('.bg-modal-6').style.display = "flex";
});

document.querySelector('.close-6').addEventListener("click", function() {
	document.querySelector('.bg-modal-6').style.display = "none";
});


