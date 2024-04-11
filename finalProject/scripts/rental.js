const linksURL = "https://rafitos123.github.io/wdd230/finalProject/data/data.json";
const cards = document.querySelector('#rental');
//get results
async function getRentals() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.rentals);
    displayLinks(data.rentals);

}

    const displayLinks = (rentals) => {
        rentals.forEach(rental => {
            const list = document.createElement("ul");
            const name = document.createElement("h3");
            const person = document.createElement("p");
            const halfRservenation = document.createElement("p");
            const fullReservation = document.createElement("p");
            const halfWalkin = document.createElement("p");
            const fullWalkin = document.createElement("p");
            const image = document.createElement('img');

            image.setAttribute('src', rental.image);
            image.setAttribute('alt', `The ${rental.name}`); 
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '200');
            image.setAttribute('height', '200');

            name.textContent = rental.name;
            person.textContent = rental.person;
            halfRservenation.textContent = rental.halfRservenation;
            fullReservation.textContent = rental.fullReservation;
            halfWalkin.textContent = rental.halfWalkin;
            fullWalkin.textContent = rental.fullWalkin;
           

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


getRentals()