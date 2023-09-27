export const getArticles = async () => {
    try {
        const articles = await fetch('https://fadlhassan-1bb6131358de.herokuapp.com/api/articles').then(res => res.json()).then(data => data);
        return articles;
    } catch (error) {
        console.log('Error:', error);
    }
};