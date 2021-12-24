import React from "react";
import Images from "../../pages/Images";
import PostIdPage from "../../pages/PostIdPage";
import Posts from "../../pages/Posts/Posts";

export const publicRoutes = [
    {path: '/', component: <Posts/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '/photos', component: <Images/>, exact: true}
]