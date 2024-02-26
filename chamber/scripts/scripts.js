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


const now = new Date(); // Obtém a data e hora atual
const twentyHour = new Date(now - 24 * 60 * 60 * 1000); // Calcula a data e hora 24 horas atrás


//number of visits 
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

if (numVisits >= 1 && now > twentyHour ) {
	visitsDisplay.textContent = `Back so soon! Awesome!`;
}



// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

