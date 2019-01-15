class NewsArticle extends HTMLElement {

constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
}

   set article(article) {
       this.root.innerHTML = `
       <style>
       h2 {
           font-family: Gerogia, 'Times New Roman', Times, serif;
           margin: 0 0 10px;
       }
       p {
           font-size: 18px;
       }
       a,
       a:visited {
           text-decoration: none;
           color: inherit;
       }
       img {
           width: 100%;
       }
       #news_card {
           background-color: white;
           padding: 25px;
           margin: 15px;
           box-shadow: 1px 2px 3px gray;
       }
   </style>
       <div id="news_card">
        <a href ="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage || ''}">
        <p>${article.description || ''}</p>
        </a>
       </div>`;  
   }
}

customElements.define('news-article', NewsArticle);