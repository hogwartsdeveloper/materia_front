import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostItem = ({post, index, remove}) => {
    const router = useNavigate();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    image="https://images.unsplash.com/photo-1549182209-fccf0dd0893b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzODc5MTQyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                />
                <CardContent>
                    <Typography
                        variant="h5"
                    >
                        {post.id}. {post.title}
                    </Typography>
                    <Typography>{post.body}</Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" size="small" onClick={() => router(`/posts/${post.id}`)}>Open</Button>
                    <Button color="primary" size="small" onClick={() => remove(post)}>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default PostItem;