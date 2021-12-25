import { Container, Typography, Box, Avatar } from "@mui/material";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/Loader/Loader";
import PostCommentForm from "../components/PostCommentForm";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    const createComment = (newComment) => {
        setComments([...comments, newComment]);
    }

    return (
        <Container
            style={{marginTop: '100px', marginBottom: '50px'}}
        >
            <Container
                maxWidth="md"
                sx={{
                    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
                    borderRadius: '4px'
                }}
            >
                {isLoading
                    ? <Loader/>
                    : <Typography
                          variant="h4"
                          sx={{marginBottom: '5%', paddingTop: '5%'}}
                      >
                          {post.id}. {post.title}
                      </Typography>
                }
                
                <Box
                    sx={{textAlign: 'center'}}
                >
                    <img src="https://habrastorage.org/r/w1560/webt/pu/no/zh/punozh3zkth3cqyppf_przd5wco.png" style={{width: '100%'}}/>
                </Box>
                <Typography sx={{margin: '20px 0', borderBottom: '1px solid #d5dddf', paddingBottom: '20px'}}>{post.body}</Typography>
                <Box>
                    <Typography sx={{margin: '40px 0 20px', borderBottom: '1px solid #d5dddf', paddingBottom: '20px'}}>Комментарии {comments.length}</Typography>
                    {isComLoading
                        ? <Loader/>
                        : <Box>
                            {comments.map(comment =>
                                <Box key={comment.id} sx={{}}>
                                    <Box sx={{display: 'flex', borderBottom: '1px solid #d5dddf', padding: '20px 10px'}}>
                                        <Avatar />
                                        <Box sx={{marginLeft: '10px'}}>
                                            <Typography>{comment.email}</Typography>
                                            <Typography sx={{padding: '5px 0'}}>{comment.body}</Typography>
                                        </Box>
                                        
                                    </Box>
                                </Box>
                                )}
                          </Box>
                    }
                    
                </Box>
                <Typography sx={{margin: '40px 0 20px', borderBottom: '1px solid #d5dddf', paddingBottom: '20px'}}>Добавить комментарии</Typography>
                <PostCommentForm create={createComment}/>
            </Container>
        </Container>
    );
};

export default PostIdPage;