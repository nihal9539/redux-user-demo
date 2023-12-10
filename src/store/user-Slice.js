import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: [],
        total: 0
    },
    reducers: {
        addUser: (state, action) => {
            const newUser = action.payload
            console.log(newUser);
            state.total++
            state.userList.push(
                {
                    name: newUser.name,
                    image: newUser.image,
                    email: newUser.email,
                    job: newUser.job,
                    id: state.total


                },

            )

        }
    }
})
export const userAction = userSlice.actions;
export default userSlice