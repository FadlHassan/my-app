export const getArticles = async () => {
    try {
        const articles = await fetch('https://fadlhassan-1bb6131358de.herokuapp.com/api/articles').then(res => res.json()).then(data => data);
        return articles;
    } catch (error) {
        console.log('Error:', error);
    }
};

export const getArticle = async (id) => {
    try {
        const article = await fetch(`https://fadlhassan-1bb6131358de.herokuapp.com/api/articles/${id}`).then(res => res.json()).then(data => data);
        return article;
    } catch (error) {
        console.log('Error:', error);
    }
}

export const loadImage = async (id) => {
    try {
        const response = await fetch(`https://fadlhassan-1bb6131358de.herokuapp.com/static/image-${id}.jpg`);
        const blob = await response.blob();
        if (blob.type !== 'image/jpeg') {
            throw new Error('Invalid image type');
        }
        const objectURL = URL.createObjectURL(blob);
        return objectURL;
    } catch (error) {
        console.log('Error:', error);
    }
}

