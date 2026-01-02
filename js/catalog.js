let allArticles = [];

async function loadArticles() {
    try {
        const response = await fetch('data/articles.json');
        allArticles = await response.json();
        displayArticles(allArticles);
    } catch (error) {
        console.error('Error loading articles:', error);
    }
}

function displayArticles(articles) {
        const catalogDiv = document.getElementById('catalog');
        catalogDiv.innerHTML = '';

        if (articles.length === 0) {
            catalogDiv.innerHTML = '<p>No matching articles found.</p>';
            return;
        }

        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add("article-card");

            articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p><em>by ${article.author} * ${article.date}</em></p>
            <p>${article.summary}</p>
            <a href="article.html?id=${article.id}">Read More</a>
            `;

            catalogDiv.appendChild(articleDiv);
        });
    } function searchArticles() {
        const query = document.getElementById('searchBox').value.toLowerCase();

        const filtered = allArticles.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.author.toLowerCase().includes(query) ||
            article.tags.some(tag => tag.toLowerCase().includes(query)) ||
            article.content.toLowerCase().includes(query)
        );
    
    displayArticles(filtered);
}

loadArticles();