import {IUser} from "../../../models/User/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface IUserSlice {
    users: IUser[];
    isLoading: boolean;
    error: null | string;
    count: number;
}

const initialState: IUserSlice = {
    users: [],
    isLoading: false,
    error: null,
    count: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // type #1
        // increments(state, action : PayloadAction<number>) {
        //     state.count += action.payload;
        // },
        // usersFetching(state) {
        //     state.isLoading = true;
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.users = action.payload;
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
    }
});

// export const { increments, usersFetching, usersFetchingSuccess, usersFetchingError } = userSlice.actions;
export default userSlice.reducer;
