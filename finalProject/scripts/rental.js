const linksURL = "https://rafitos123.github.io/wdd230/finalProject/data/data.json";
const cards = document.querySelector('#rental');
//get results
async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.rentals);
    displayLinks(data.rentals);

}

    const displayLinks = (rentals) => {
        rentals.forEach(rental => {
            const list = document.createElement("ul");
            const name = document.createElement("li");
            const person = document.createElement("p");
            const halfRservenation = document.createElement("p");
            const fullReservation = document.createElement("p");
            const halfWalkin = document.createElement("p");
            const fullWalkin = document.createElement("p");
            const image = document.createElement('img');

            image.setAttribute('src', rentals.image);
            image.setAttribute('alt', `The ${rentals.name}`); 
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '100');
            image.setAttribute('height', '100');

            name.textContent = rentals.name;
            person.textContent = rentals.name;
            halfRservenation.textContent = rentals.name;
            fullReservation.textContent = rentals.name;
            halfWalkin.textContent = rentals.name;
            fullWalkin.textContent = rentals.name;
           

            list.appendChild(image);
            list.appendChild(name);
            list.appendChild(person);
            list.appendChild(halfRservenation);
            list.appendChild(fullReservation);
            list.appendChild(halfWalkin);
            list.appendChild(fullWalkin);
            cards.appendChild(list);
        });



    }


getMembers()