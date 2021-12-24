import { Button, Container, createTheme, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import PostService from "../../API/PostService";
import MyModal from "../../components/MyModal";
import PostFilter from "../../components/PostFilter";
import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";
import { useFetching } from "../../hooks/useFetching";
import { useObserver } from "../../hooks/useObserver";
import { usePosts } from "../../hooks/usePosts";
import { getPageCount } from "../../utils/pages";
import { useStyles } from "./PostsStyle";

const theme = createTheme({
    palette: {primary: {main: '#FF8E53', light: '#FF8E53', dark: '#FF8E53'}}
});

const Posts = () => {
    const classes = useStyles(theme);
    
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const [modal, setModal] = useState(false);

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

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <Container>
            <Container className={classes.container}>
                <Typography
                    className={classes.hiTitle}
                    variant="h2"
                    gutterBottom
                >
                    For learning Meterial
                </Typography>
                <Typography
                    className={classes.hiDescription}
                    variant="h5"
                    paragraph
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi ex mollitia, esse blanditiis iure deleniti a, 
                    cum quae deserunt saepe veritatis rerum provident dicta repellendus?
                </Typography>
                <Container>
                    
                        <Grid container justifyContent='center' spacing={2}>
                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={() => setModal(true)}>Create Post</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={() => fetchPosts(limit, page)}>Get Posts</Button>
                            </Grid>
                        </Grid>
                    
                </Container>
                <MyModal title="Add Post" visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                <PostFilter filter={filter} setFilter={setFilter}/>
                
            </Container>
            <PostList posts={sortedAndSearchedPosts} title="Post is API" remove={removePost}/>
            <Container ref={lastElement} style={{height: 20}} />
        </Container>
    );
};

export default Posts;