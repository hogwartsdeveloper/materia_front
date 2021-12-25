import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);

        setPost({title: '', body: ''});
    }

    return (
        <FormControl sx={{width: '100%'}}>
            <TextField
                label="Post title"
                onChange={e => setPost({...post, title: e.target.value})}
                sx={{marginBottom: '1em'}}
            />
            <TextField
                onChange={e => setPost({...post, body: e.target.value})}
                label="Post body"
                multiline
                rows={4}
                sx={{marginBottom: '1em'}}
            />
            <Button onClick={addNewPost}>Send</Button>
        </FormControl>
    );
};

export default PostForm;