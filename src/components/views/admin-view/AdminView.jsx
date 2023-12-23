import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Container} from '@mui/material';

const AdminView = () =>{
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [contentFile, setContentFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageFileName, setImageFileName] = useState('');
    const [id, setId] = useState(0);
    
    const handleDocChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setContentFile(event.target.files[0]);
            setFileName(event.target.files[0].name);
        }
    };

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageFile(event.target.files[0]);
            setImageFileName(event.target.files[0].name);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('content', contentFile);

        try {
            const response = await fetch('http://localhost:3001/api/articles', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                console.log('Successfuly created blog');
                const data = await response.json();
                const id = data.id;
                setId(id);
            } else {
                console.log('Error in creating blog');
            }
        } catch (error) {
            console.error('Form Submission Error:', error);
        }
    };

    const handleSubmitImage = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await fetch(`http://localhost:3001/api/articles/image/${id}`, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                console.log('Successfuly created image');
            } else {
                console.log('Error in creating image');
            }
        
        } catch (error) {
            console.error('Form Submission Error:', error);
        }
    }

    const handleDeleteArticle = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/api/articles/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                console.log('Successfuly deleted article');
            } else {
                console.log('Error in deleting article');
            }
        } catch (error) {
            console.error('Form Submission Error:', error);
        }
    }

    return (
        <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
            mt: 1, p: 3, gap: 5 }}>
                <Typography variant="h6" fontWeight='light' sx={{textDecoration: 'underline'}}>
                        Create a new article
                </Typography>
                <TextField sx={{ maxWidth: 500 }} label="Title" id="outlined-basic" onChange={(event) => setTitle(event.target.value)} />
                <TextField sx={{ maxWidth: 500 }} label="Subtitle" id="outlined-basic" onChange={(event) => setSubtitle(event.target.value)} />
                <Typography variant="body1">
                        Content File uploaded: {fileName}
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Upload Content PDF
                    <input
                        type="file"
                        hidden
                        accept=".docx"
                        onChange={handleDocChange}
                    />
                </Button>        
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Submit Content
                </Button>
            </Box>
            <Box component="form" onSubmit={handleSubmitImage} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1, p: 3, gap: 5 }}>
                <Typography variant="h6" fontWeight='light' sx={{textDecoration: 'underline'}}>
                        Upload image for article
                </Typography>
                <Typography variant="body1">
                        Image File uploaded: {imageFileName}
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Upload Image
                    <input
                        type="file"
                        hidden
                        accept=".jpg, .jpeg, .png"
                        onChange={handleImageChange}
                    />
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Submit Image
                </Button>  
            </Box>
            <Box component="form" onSubmit={handleDeleteArticle} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',mt: 1, p: 3, gap: 5 }}>   
                <Typography variant="h6" fontWeight='light' sx={{textDecoration: 'underline'}}>
                        Delete an article
                </Typography>
                <TextField sx={{ maxWidth: 500 }} label="Id" id="outlined-basic" onChange={(event) => setId(event.target.value)} />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    >
                        Delete Article
                </Button>   
            </Box>     
        </Container>
    );
}

export default AdminView;
