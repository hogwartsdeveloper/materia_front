import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PostItem from "./PostItem";


const PostList = ({posts, title, remove, isLoading}) => {
    if (!posts.length && !isLoading) {
        return (
            <Typography
                variant="h2"
                align="center"
                color="textPrimary"
            >
                Посты не найдены!
            </Typography>
        );
    };

    return (
        <Container>
            <Typography
                variant="h2"
                align="center"
            >
                {title}
            </Typography>
            <Container style={{marginTop: 28}} maxWidth='md'>
                <Grid container spacing={4}>
                    {posts.map((post, index) => (
                        <PostItem post={post} index={index + 1} key={index} remove={remove}/>
                    ))}
                </Grid>
            </Container>
        </Container>
    )
};

export default PostList;