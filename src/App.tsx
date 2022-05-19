import React, {useEffect} from 'react'
import './assets/scss/style.scss'
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import userSlice from "./store/reducers/User/UserSlice";
// import { increments } from "./store/reducers/User/UserSlice";
import {fetchUsers} from "./store/reducers/User/ActionCreators";

function App() {
    const { count, users, isLoading, error } = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

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
            {
                JSON.stringify(users, null, 2)
            }
            <button onClick={handleClick}>Increment +1</button>
        </>
    );
}

export default App;
