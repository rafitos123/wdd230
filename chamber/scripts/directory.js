const linksURL = "https://rafitos123.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#directory');
//get results
async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.companies);
    displayLinks(data.companies);

}

    const displayLinks = (companies) => {
        companies.forEach(company => {
            const list = document.createElement("ul");
            const name = document.createElement("li");
            const Url = document.createElement("p");
            const Phone = document.createElement("li");
            const Adress = document.createElement("p");

            name.textContent = company.name;
            Url.textContent = company.Url;
            Adress.textContent = company.Adress;
            Phone.textContent = company.Phone;

            list.appendChild(name);
            list.appendChild(Url);
            list.appendChild(Adress);
            list.appendChild(Phone);
            cards.appendChild(list);
        });



    }


getMembers()