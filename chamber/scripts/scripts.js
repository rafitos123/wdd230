let text = document.lastModified;
document.getElementById("last").innerHTML = text;


//navBar
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const events = document.querySelector(".events");
const container = document.querySelector(".container");
const company = document.querySelector(".company");
const contact = document.querySelector(".contact");
const weather = document.querySelector(".currentWeather");
const card = document.querySelector(".card");
const cardSecond = document.querySelector(".card2");
const cardThird = document.querySelector(".card3");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		events.style.background = "#171718";
		events.style.color = "#fff";
		container.style.background = "#454545";
		container.style.color = "#fff";
		company.style.background = "#000";
		company.style.color = "#fff";
		contact.style.background = "#171718";
		contact.style.color = "#fff";
		weather.style.background = "#000";
		weather.style.color = "#fff";
		card.style.background = "#171718";
		card.style.color = "#fff";
		cardSecond.style.background = "#171718";
		cardSecond.style.color = "#fff";
		cardThird.style.background = "#171718";
		cardThird.style.color = "#fff";
		cardThird.style.background = "#171718";
		cardThird.style.color = "#fff";
		header.style.background = "#000";
		header.style.color = "#fff";
		nav.style.background = "#171718";
		nav.style.color = "#fff";
		footer.style.background = "#171718";
		footer.style.color = "#fff";
		modeButton.textContent = "🔆 Dark mode on";
		
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		events.style.background = "#90A955";
		events.style.color = "#000";
		container.style.background = "#fff";
		container.style.color = "#000";
		company.style.background = "#fff";
		company.style.color = "#000";
		contact.style.background = "#90A955";
		contact.style.color = "#000";
		weather.style.background = "#ededed";
		weather.style.color = "#000";
		card.style.background = "#ECF39E";
		card.style.color = "#000";
		cardSecond.style.background = "#ECF39E";
		cardSecond.style.color = "#000";
		cardThird.style.background = "#ECF39E";
		cardThird.style.color = "#000";
		header.style.background = "#fff";
		header.style.color = "#000";
		nav.style.background = "#31572c";
		nav.style.color = "#fff";
		footer.style.background = "#31572c";
		footer.style.color = "#fff";
		modeButton.textContent = "🕶️ Dark mode off";
		
	}
});