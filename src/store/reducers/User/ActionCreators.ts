import {AppDispatch} from "../../store";
import {IUser} from "../../../models/User/IUser";
// import {usersFetching, usersFetchingError, usersFetchingSuccess} from "./UserSlice";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

// type #1

// export const fetchusers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(usersFetching());
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         console.log('response', response);
//         dispatch(usersFetchingSuccess(response.data));
//     } catch (e) {
//         console.error(e);
//         dispatch(usersFetchingError('Something went wrong'));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users1');
            return response.data;
        } catch (e) {
            console.error(e);
            return thunkApi.rejectWithValue('Something went wrong!!!');
        }
    }
)
