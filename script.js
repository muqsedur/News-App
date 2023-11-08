const container = document.querySelector('.container');
const loading = document.querySelector('.loading')
const API = "13f1c88363c8499b95f90e01db221efa";

getData()

async function getData() {
    await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-10-08&sortBy=publishedAt&apiKey=${API}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        printData(data);

    })
    .catch((error) => {
        throw error;
    });
}

function printData(data) {
    for(let i = 0; i < data.articles.length; i++) {
        // creating article div
        const article = document.createElement("div");
        article.classList.add('article');

        // creating article img 
        const articleImage = document.createElement("img");
        articleImage.classList.add('article-image');
        articleImage.src = data.articles[i].urlToImage;

        article.append(articleImage);

        const articleInfo = document.createElement("div");
        articleInfo.classList.add('article-info');

        const articleTitle = document.createElement("p");
        articleTitle.classList.add('article-title')
        articleTitle.textContent = data.articles[i].title;

        const articleDescription = document.createElement("p");
        articleDescription.classList.add("article-description");
        articleDescription.textContent = data.articles[i].description;

        articleInfo.append(articleTitle);
        articleInfo.append(articleDescription);

        article.append(articleInfo);

        const articleWrapper = document.createElement('div');
        articleWrapper.classList.add('article-wrapper');

        const articleDateAuthor = document.createElement('div');
        articleDateAuthor.classList.add('article-date-author-wrapper');

        const date = document.createElement('p');
        date.classList.add('article-publishedAt');
        date.textContent = data.articles[i].publishedAt;

        articleDateAuthor.append(date);

        const author = document.createElement("p");
        author.classList.add('author');
        author.textContent = data.articles[i].author;
    
        articleDateAuthor.append(author);

        articleWrapper.append(articleDateAuthor);


        const articleBtn = document.createElement('div');
        articleBtn.classList.add('article-btn');

        const btn = document.createElement('a');
        btn.textContent = "Read More"
        btn.classList.add('btn');
        btn.href = data.articles[i].url;
        btn.setAttribute("target", "_blank");
        

        articleBtn.append(btn);
        articleWrapper.append(articleBtn);

        article.append(articleWrapper);
        container.appendChild(article);
    }
}