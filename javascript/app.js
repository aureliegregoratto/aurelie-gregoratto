const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})


//Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
	cursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;")
})

document.addEventListener('click', () => {
	cursor.classList.add("expand");
	setTimeout(() => {
		cursor.classList.remove("expand");
	}, 300)
});



//loader
$(window).on("load", function(){
	$(".loader").fadeOut(1000);
});


//Pluie
const body = document.body;

setInterval(rainFall, 10);

function rainFall(){
    const waterDrop = document.createElement('i');

    waterDrop.classList.add('fas');
    waterDrop.classList.add('fa-tint');
    waterDrop.style.fontSize = Math.random() * 5 + 'px';
    waterDrop.style.animationDuration = Math.random() * 15 + 's';
    waterDrop.style.opacity = Math.random() + 0.2;
	waterDrop.style.left = Math.random() * window.innerWidth + 'px';

    body.appendChild(waterDrop);

    setTimeout(() =>{
        waterDrop.remove();
    }, 3000)
}

//Empêcher le copie/coller du texte
$(document).ready(function () {
    $('body').bind('cut copy', function (e) {
    e.preventDefault();
    });
});




// Fonction executée lors de l'utilisation du clic droit
$(document).bind("contextmenu",function()
{
// Indication au navigateur pour ne pas réagir en cas de clic droit
swal("Pour des raisons de droit d'auteur, le clic droit n'est pas utilisable sur ce site. Merci de votre compréhension.");
return false; 
});