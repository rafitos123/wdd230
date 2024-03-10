const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);

    const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {
            const card = document.createElement('section');
            const fullName = document.createElement('_');
            const portrait = document.createElement('img');
    
            fullName.textContent = `${prophet._____} _____`; 
           
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.____} ________`); 
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');
    
            card.appendChild(____); 
            card.appendChild(portrait);
            cards.appendChild(card);
        }); 
    
    }
      
}



getProphetData();