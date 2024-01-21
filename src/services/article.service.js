import { GraphQLClient, gql } from 'graphql-request';

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


export const getArticles2 = async () => {
    try {
        const endpoint = process.env.REACT_APP_GRAPH_CMS_API_KEY;
        console.log('Endpoint:', endpoint);
        const graphQLClient = new GraphQLClient(endpoint,{
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_GRAPH_CMS_AUTH_TOKEN}`,
            }
        });
        const query = gql`
            {
                articles {
                    title
                    slug
                    datePosted
                    image {
                        url
                    }
                }
            }
        `;
        const data = await graphQLClient.request(query);
        return data.articles;
    } catch (error) {
        console.log('Error:', error);
    }
}

// Get an article by slug
export const getArticle2 = async (slug) => {
    try {
        const endpoint = process.env.REACT_APP_GRAPH_CMS_API_KEY;
        console.log('Endpoint:', endpoint);
        const graphQLClient = new GraphQLClient(endpoint,{
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_GRAPH_CMS_AUTH_TOKEN}`,
            }
        });
        const query = gql`
            query getArticle($slug: String!) {
                article(where: {slug: $slug}) {
                    title
                    datePosted
                    image {
                        url
                    }
                    content {
                        html
                    }
                }
            }
        `;
        console.log('Query:', query);
        const data = await graphQLClient.request(query, { slug });
        return data.article;
    } catch(error) {
        console.log('Error:', error);
    }
}
