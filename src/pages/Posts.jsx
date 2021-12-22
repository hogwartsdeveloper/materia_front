import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostList from "../components/PostList";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { getPageCount } from "../utils/pages";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
        
    });

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })
    
    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

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
            <PostList posts={posts} title="Post is API" remove={removePost}/>
            <Container ref={lastElement} style={{height: 20}} />
        </Container>
    );
};

export default Posts;