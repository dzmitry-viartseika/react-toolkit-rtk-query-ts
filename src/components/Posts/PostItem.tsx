import React, {FC, ReactNode} from 'react';
import {IPost} from "../../models/Posts/IPost";
import {PostsApi} from "../../services/Users/PostsService";

interface IPostItemProps {
    post: IPost,
    children?: ReactNode;
    remove: (id: number) => void;
    update: (post: IPost) => void;
}


const PostItem: FC<IPostItemProps> = ({post, remove, update}) => {
    const { id } = post;
    const removeHandler = async (event: React.MouseEvent): Promise<void> => {
        event.preventDefault();
        await remove(id);
    };

    const updateHandler = async (event: React.MouseEvent): Promise<void> => {
        event.preventDefault();
        const title = prompt();
        const updatedPost = {
            ...post,
            title,
        }
        console.log('updatedPost', updatedPost);
        // @ts-ignore
        await update(updatedPost);
    }
    return (
        <div>
            <hr/>
            {post.id} = {post.title}
            <br/>
            <button onClick={removeHandler}>Delete</button>
            <br/>
            <br/>
            <br/>
            <button onClick={updateHandler}>Update Post</button>
            <hr/>
        </div>
    )
}

export default PostItem;
