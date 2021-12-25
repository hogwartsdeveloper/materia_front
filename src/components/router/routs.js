import React from "react";
import Images from "../../pages/Images";
import PostIdPage from "../../pages/PostIdPage";
import Posts from "../../pages/Posts/Posts";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

export const privateRoutes = [
    {path: '/', component: <Images/>, exact: true},
    {path: '/photos', component: <Images/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true}
]

export const publicRoutes = [
    {path: '/signIn', component: <SignIn/>, exact: true},
    {path: '/signUp', component: <SignUp/>, exact: true}
]