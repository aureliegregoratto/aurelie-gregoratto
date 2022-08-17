//menu burger
/*var menu = document.getElementById('nav');
var show = 0;
            
	function display(){
        if (show==0){
            menu.style.display = "block";
            show = 1;
        }else{
            menu.style.display = "none";
            show = 0;
        }
                
            }*/




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


//Animation bar nav
const navigation = document.querySelector('.header-container');

window.addEventListener('scroll', () => {
	
	if(window.scrollY > 900){
		navigation.classList.add('anim-nav');
	}else{
		navigation.classList.remove('anim-nav');
	}

	if(window.innerWidth<768){
		if(window.scrollY > 200){
			navigation.classList.add('anim-nav');
		}else{
			navigation.classList.remove('anim-nav');
		}
	}
});