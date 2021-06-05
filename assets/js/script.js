let panggil = "Selamat Datang, ";

if (nama === null || nama === ""){
	panggil = "Selamat Datang, Pengunjung";
}
else {
	panggil += nama;
}

let sapa = document.getElementById("panggil");
sapa.innerText = panggil;

function bukaSlide() {
	let drop = document.querySelector("#down");
	if (drop.className === "dropdown") drop.className += "-mobile";
	else drop.className = "dropdown";
}

const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const homeBtn = document.getElementById("homeBtn")
sideNav.style.right = "-250px";
menuBtn.onclick = () => {
    if (sideNav.style.right == "-250px") {
    	sideNav.style.right = "0";
    }
    else {
    	sideNav.style.right = "-250px";
    }
}
const scroll = new SmoothScroll('a[href*="#"', {
    speed: 1000,
    speedAsDuration: true
});