import React, {FC, ReactNode} from 'react';
import {IPost} from "../../models/Posts/IPost";

interface IPostItemProps {
    post: IPost,
    children?: ReactNode;
}


const PostItem: FC<IPostItemProps> = ({post}) => {
    const handleClick = (): void => {
        console.log('handleClick');
    }
    return (
        <div>
            {post.id} = {post.title}
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default PostItem;
