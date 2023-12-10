import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState : {
        userList:[],
        total:10
    },
    reducers:{
        addUser: (state, action) => {
            const newUser = action.payload
            console.log(newUser);
           state.userList.push(
            {
                name : newUser.name,
                image:newUser.image,
                email:newUser.email,
                job:newUser.job,
                
            }
           )
        }
    }
})
export const userAction = userSlice.actions;
export default userSlice