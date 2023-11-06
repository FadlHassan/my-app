
import React, { useState } from 'react';

const AdminView = () =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const article = { title, content, image };
        const response = await fetch('/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });
        if (response.ok) {
            // TODO: Handle successful submission
        } else {
            // TODO: Handle submission error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>
            <br />
            <label>
                Content:
                <textarea value={content} onChange={(event) => setContent(event.target.value)} />
            </label>
            <br />
            <label>
                Image:
                <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AdminView;
