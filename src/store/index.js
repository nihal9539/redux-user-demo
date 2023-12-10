import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './user-Slice'; "./user-Slice"
import UserReducer from './user-Slice';

const store = configureStore({
    reducer: {
        user:UserReducer
    }
})

export default store