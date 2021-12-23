import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

const PostCommentForm = ({create}) => {
    const [comment, setComment] = useState({email: '', body: ''});

    function addNewComment(e) {
        e.preventDefault();
        const newComment = {
            ...comment, id: Date.now()
        };

        create(newComment);

        setComment({email: '', body: ''});
    }

    return (
        <FormControl sx={{width: '100%', margin: '20px 0'}}>
            <TextField
                value={comment.email}
                label="Ваш Email"
                onChange={e => setComment({...comment, email: e.target.value})}
                sx={{marginBottom: '1em'}}
            />
            <TextField
                value={comment.body}
                label="Ваш коммент"
                onChange={e => setComment({...comment, body: e.target.value})}
                multiline
                rows={4}
                sx={{marginBottom: '1em'}}
            />
            <Button onClick={addNewComment}>Send</Button>
        </FormControl>
    );
};

export default PostCommentForm;