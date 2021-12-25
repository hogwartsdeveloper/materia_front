import { Button, Container, createTheme, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import PostService from "../../API/PostService";
import Header from "../../components/Header";
import Loader from "../../components/Loader/Loader";
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
    const [limit] = useState(10);
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
                <Header/>
                <Container>
                        <Grid container justifyContent='center' spacing={2}>
                            <Grid item>
                                <Button variant="outlined" color="secondary" onClick={() => setModal(true)}>Создать пост</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="secondary" onClick={() => fetchPosts(limit, page)}>Загрузить посты</Button>
                            </Grid>
                        </Grid>
                    
                </Container>
                <MyModal title="Добавить пост" visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                <PostFilter filter={filter} setFilter={setFilter}/>
                
            </Container>
            {postError &&
                <Typography
                    variant="h3"
                    align="center"
                    color="textPrimary"
                >
                    Произошло ошибка "{postError}"
                </Typography>
            }
            <PostList posts={sortedAndSearchedPosts} title="Посты из jsonplaceholder.typicode.com" remove={removePost} isLoading={isPostsLoading}/>
            <Container ref={lastElement} style={{height: '10px'}} />

            {isPostsLoading &&
                <Loader/>
            }

        </Container>
    );
};

export default Posts;