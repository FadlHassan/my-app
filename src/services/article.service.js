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
        const imageUrl = await fetch(`https://fadlhassan-1bb6131358de.herokuapp.com/api/articles/image/${id}`).then(res => res.json()).then(data => data);
        if (imageUrl.message) {
            throw imageUrl.message;
        }
        return imageUrl.url;
    } catch (error) {
        console.log('Error:', error);
    }
}

export const loadAllImages = async () => {
    try {
        const imageUrls = await fetch(`https://fadlhassan-1bb6131358de.herokuapp.com/api/articles/images`).then(res => res.json()).then(data => data);
        return imageUrls;
    } catch (error) {
        console.log('Error:', error);
    }
}

