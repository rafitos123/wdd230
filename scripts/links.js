const baseURL = "https://rafitos123.github.io/wdd230/";
const linksURL = "https://rafitos123.github.io/wdd230/data/links.json";

//get results
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();