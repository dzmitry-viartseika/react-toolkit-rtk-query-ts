import React, {useEffect} from 'react'
import './assets/scss/style.scss'
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import userSlice from "./store/reducers/User/UserSlice";
// import { increments } from "./store/reducers/User/UserSlice";
import {fetchUsers} from "./store/reducers/User/ActionCreators";
import PostContainer from './components/Posts/PostContainer';
import {PostsApi} from "./services/Users/PostsService";
import {IPost} from "./models/Posts/IPost";

function App() {
    const { count, users, isLoading, error } = useAppSelector(state => state.userReducer);
    const [ createPost, {} ] = PostsApi.useCreatePostMutation();
    const dispatch = useAppDispatch();

    const handleCreatePost = async () => {
        const title = prompt();
        console.log('title', typeof title);
        const newPost = {
            title,
            body: title,
            id: Math.random(),
        }
        console.log('newPost', newPost);
        // @ts-ignore
        await createPost(newPost);
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const handleClick = () => {
        // dispatch(increments(500000))
    }
    return (
        <>
            <h1>Redux Toolkit</h1>
            {isLoading && <h1>Идёт загрузка</h1>}
            {error && <h1>{error}</h1>}
            {/*{*/}
            {/*    JSON.stringify(users, null, 2)*/}
            {/*}*/}
            <hr/>
            <button onClick={handleClick}>Increment +1</button>
            <hr/>
            <button onClick={handleCreatePost}>Create post</button>
            <hr/>
            <PostContainer />
        </>
    );
}

export default App;
