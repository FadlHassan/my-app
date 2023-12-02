export const getArticles = async () => {
    try {
        const articles = await fetch('http://localhost:3001/api/articles/').then(res => res.json()).then(data => data);
        return articles;
    } catch (error) {
        console.log('Error:', error);
    }
};

export const getArticle = async (id) => {
    try {
        const article = await fetch(`http://localhost:3001/api/articles/${id}`).then(res => res.json()).then(data => data);
        return article;
    } catch (error) {
        console.log('Error:', error);
    }
}

export const loadImage = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/static/image-${id}.jpg`);
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

