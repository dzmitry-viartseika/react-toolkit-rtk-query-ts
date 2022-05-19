import {configureStore, combineReducers} from "@reduxjs/toolkit";
import userReducer from './reducers/User/UserSlice';
import { useDispatch } from 'react-redux'
import { PostsApi } from '../services/Users/PostsService';

const rootReducer = combineReducers({
    userReducer,
    [PostsApi.reducerPath]: PostsApi.reducer
});


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(PostsApi.middleware)),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
