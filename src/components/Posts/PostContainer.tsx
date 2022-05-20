import React, {useEffect, useState} from 'react';
import {PostsApi} from "../../services/Users/PostsService";
import PostItem from "./PostItem";
import {IPost} from "../../models/Posts/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState<number>(100);
    // параметры в запросе если нужно
    const [ deletePost, {} ] = PostsApi.useDeletePostMutation();
    const [ updatePost, {} ] = PostsApi.useUpdatePostMutation();
    const { data: posts, isLoading, status, refetch } = PostsApi.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000,
    });
    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3);
        // }, 2000);
    }, []);

    const removeItem = async (id: number) => {
        console.log('id', id);
        await deletePost(id);
    }

    const updateItem = async (post: IPost) => {
        console.log('post', post);
        await updatePost(post);
    }

    return (
        <div>
            { isLoading && <h1>Идёт загрузка</h1>}
            { status && <h1>status={ status }</h1> }
            {posts && posts.map((post) =>
                <PostItem
                    key={post.id}
                    post={post}
                    remove={removeItem}
                    update={updateItem}
                />
            )}
            <button onClick={() => refetch()}>Refetch Dates</button>
        </div>
    )
}

export default PostContainer;
