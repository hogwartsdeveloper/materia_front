import React from "react";
import { useParams } from "react-router-dom";

const PostIdPage = () => {
    const params = useParams();
    return (
        <div
            style={{marginTop: '100px'}}
        >
            <h1>Вы открыли страницу поста с id: {params.id}</h1>
        </div>
    );
};

export default PostIdPage;