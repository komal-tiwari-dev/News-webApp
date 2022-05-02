// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
import { searchNews, append } from "../scripts/fetch.js";

document.querySelector("#navbar").innerHTML = navbar(); 


let data = JSON.parse(localStorage.getItem("news"));
console.log(data);
let result = document.querySelector("#results")

let image = document.createElement("img");
image.src = data.urlToImage;

let Newstitle = document.createElement("h4");
Newstitle.innerText = data.title;

let desc = document.createElement("p");
desc.innerText = data.description;
result.append(image,Newstitle,desc)
///////
let search = (e) => {
  if (e.key === "Enter") {
    let query = document.querySelector("#search_input").value;
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
    let container = document.querySelector("#results");
    searchNews(query, url).then((data) => {
      console.log(data.articles);
      let newdata = data.articles;
      localStorage.setItem("searchdata", JSON.stringify(data.articles));
      window.location.href = "./search.html";
    });
  }
};
document.querySelector("#search_input").addEventListener("keydown", search);