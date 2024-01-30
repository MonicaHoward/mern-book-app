import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography  } from '@mui/material';

const NewBlogForm = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ draftBlog, setDraftBlog ] = useState({
        title: '', 
        content: '',
        author: ''
      });

    const handleSubmit = () => {
        setDraftBlog({title, content: content, author: author});
        fetch('http://localhost:3003/api/create-blog', {
            method: "POST", headers: {
            "content-type": "application/json"
          },
            body: JSON.stringify(draftBlog)
          })
      }

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px'}}>
            <Typography variant="h1">Create a Blog</Typography>
            <TextField id="outlined-basic" label="title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <TextField id="outlined-basic" label="content" variant="outlined" value={content} onChange={(e) => setContent(e.target.value)}/>
            <TextField id="outlined-basic" label="author" variant="outlined" value={author} onChange={(e) => setAuthor(e.target.value)}/>

            <Button variant="contained" onClick={handleSubmit}>submit blog</Button>
        </Box>
    )
}

export default NewBlogForm;