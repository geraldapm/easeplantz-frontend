const nama = prompt("Siapa nama anda ?");

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
	if (drop.className === "dropdown")
		drop.className += "-mobile";
	else
		drop.className = "dropdown";
}