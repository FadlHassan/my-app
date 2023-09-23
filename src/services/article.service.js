export const getArticles = async () => {
    try {
        const articles = await fetch('http://localhost:3001/api/articles').then(res => res.json()).then(data => data);
        return articles;
    } catch (error) {
        console.log('Error:', error);
    }
};