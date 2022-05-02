// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import {searchNews,append} from "../scripts/fetch.js";

document.querySelector("#navbar").innerHTML=navbar()

let search = (e) =>{
    if(e.key === "Enter"){
        let query = document.querySelector("#search_input").value
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
        let container=document.querySelector("#results")
        searchNews(query,url).then((data)=>{
            console.log(data.articles)
            let newdata=data.articles
            localStorage.setItem("searchdata",JSON.stringify(data.articles))
            window.location.href='./search.html'
        })
    }
}

let india = "in";
let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${india}`;
let container = document.querySelector("#results");
searchNews(india, url).then((data) => {
  console.log(data.articles);
  append(data.articles, container);
});

document.querySelector("#search_input").addEventListener("keydown",search)

let sidebar=document.querySelector('#sidebar').children

function cSearch(){
    // console.log(this.id)
    let cc=this.id
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${cc}`;
    let container = document.querySelector("#results");
    searchNews(cc, url).then((data) => {
      console.log(data.articles);
      append(data.articles, container);
    });
}

for(let el of sidebar){
    el.addEventListener('click',cSearch)
}