let menu = document.getElementById("menuSlide");
let menuControl = document.getElementById("menuControl");
let menuClose = document.getElementById("closeMenu");

let open = false;

menuControl.addEventListener("click", function() {
	if (open === false) {
		menu.style.width = '20%';
		open = true;
	} else {
		menu.style.width = '0%';
		open = false;
	}
});

menuClose.addEventListener("click", function() {
	menu.style.width = '0%';
	open = false;
});



