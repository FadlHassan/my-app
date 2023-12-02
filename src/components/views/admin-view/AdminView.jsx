
import React, { useState } from 'react';
import { Box, TextField, Typography, Button} from '@mui/material';

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

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
        mt: 1, p: 3, gap: 5 }}>
            <TextField sx={{ maxWidth: 500 }} label="Title" id="outlined-basic" onChange={(event) => setTitle(event.target.value)} />
            <TextField sx={{ maxWidth: 500 }} label="Subtitle" id="outlined-basic" onChange={(event) => setSubtitle(event.target.value)} />
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
            <Typography variant="body1">
                    Content File uploaded: {fileName}
            </Typography>
    
            <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{ maxWidth: 100 }}
            >
                Submit Content
            </Button>
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
            <Typography variant="body1">
                    Image File uploaded: {imageFileName}
            </Typography>
            <Button
                type="submit"
                onClick={handleSubmitImage}
                variant="contained"
                sx={{ maxWidth: 100 }}
            >
                Submit Image
            </Button>
        </Box>
    );
}

export default AdminView;
