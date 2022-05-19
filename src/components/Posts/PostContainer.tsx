import React from 'react';
import {PostsApi} from "../../services/Users/PostsService";
import PostItem from "./PostItem";

const PostContainer = () => {
    // параметры в запросе если нужно
    const { data: posts, isLoading, status } = PostsApi.useFetchAllPostsQuery(5);
    return (
        <div>
            { isLoading && <h1>Идёт загрузка</h1>}
            { status && <h1>status={ status }</h1> }
            {posts && posts.map((post) => <PostItem key={post.id} post={post}/>)}
        </div>
    )
}

export default PostContainer;
