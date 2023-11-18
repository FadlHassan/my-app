
import React, { useState } from 'react';
import { Box, TextField, Button} from '@mui/material';

const AdminView = () =>{
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const article = { title, subtitle };
        const response = await fetch('http://localhost:3001/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });
        if (response.ok) {
            console.log('Successfuly created blog');
        } else {
            console.log('Error in creating blog');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
        mt: 1, p: 3, gap: 5 }}>
            <TextField sx={{ maxWidth: 500 }} label="Title" id="outlined-basic" onChange={(event) => setTitle(event.target.value)} />
            <TextField sx={{ maxWidth: 500 }} label="Subtitle" id="outlined-basic" onChange={(event) => setSubtitle(event.target.value)} />
            <Button
                type="submit"
                variant="contained"
                sx={{ maxWidth: 100 }}
            >
                Submit
            </Button>
        </Box>
    );
}

export default AdminView;
