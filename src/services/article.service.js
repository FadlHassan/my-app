import { API } from 'aws-amplify';

export const getArticles = async () => {
    try {
        const articles = await API.get('myapi', '/api/articles').then(res => res.json()).then(data => data);
        return articles;
    } catch (error) {
        console.log('Error:', error);
    }
};