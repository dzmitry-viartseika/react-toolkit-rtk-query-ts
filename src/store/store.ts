import {configureStore, combineReducers} from "@reduxjs/toolkit";
import userReducer from './reducers/User/UserSlice';
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
    userReducer,
});


const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
