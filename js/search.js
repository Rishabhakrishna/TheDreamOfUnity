function searchArticles(keyword) {
    const lowerKey = keyword.toLowerCase();
    return window.loadArticles.filter(article =>
        article.title.toLowerCase().includes(lowerKey) ||
        article.tags.some(tag => tag.toLowerCase().includesLowerKey)) ||
        article.content.toLowerCase().includes(lowerKey)
     const results = searchArticles('internet');
    console.log(results);
}