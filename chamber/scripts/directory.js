const linksURL = "https://rafitos123.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#directory');
//get results
async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.companies);
    displayLinks(data);

    const displayLinks = (companies) => {
        companies.forEach(companie => {
            const list = document.createElement("ul");
            const url = document.createElement("li");
            const Thelink = document.createElement("li");

            list.textContent = `${lessons.title} - ${lessons.url}`;
        });

        lists.appendChild(list);
        lists.appendChild(url);
        lists.appendChild(Thelinklink);
    }
  }

  getLinks();