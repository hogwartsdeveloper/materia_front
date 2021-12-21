import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PostService from "../API/PostService";
import PostList from "../components/PostList";
import { useFetching } from "../hooks/useFetching";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [fetchPosts, postError] = useFetching(async () => {
        const response = await PostService.getAll();
        setPosts([...posts, ...response.data]);
    })
    return (
        <Container>
            <Container maxWidth="md" style={{marginTop: 100}}>
                <Typography
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    For learning Meterial
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi ex mollitia, esse blanditiis iure deleniti a, 
                    cum quae deserunt saepe veritatis rerum provident dicta repellendus?
                </Typography>
                <Container>
                    <Grid container justifyContent='center'>
                        <Grid item>
                            <Button variant="outlined" color="primary" onClick={fetchPosts}>About</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <PostList posts={posts} title="Post is API"/>
        </Container>
    );
};

export default Posts;