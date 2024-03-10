const baseURL = "https://rafitos123.github.io/wdd230/";
const linksURL = "https://rafitos123.github.io/wdd230/data/links.json";
const lists = document.querySelector('#links');
//get results
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);

    const displayLinks = (lessons) => {
        lessons.forEach(link => {
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