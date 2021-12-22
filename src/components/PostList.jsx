import { Container, Grid, Typography } from "@mui/material";
import { makeStyles, useTheme } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import PostItem from "./PostItem";


const PostList = ({posts, title, remove}) => {
    const theme = useTheme();
    if (!posts.length) {
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