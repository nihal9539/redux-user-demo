import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState : [
        {
            name:"Nihal 1",
            position:"Full Stack Developer",
            email:"1235@gmail.com",
            id:1
        },
        {
            name:"Nihal 2",
            position:"Mern Stack Developer",
            email:"123@gmail.com",
            id:2
        },
        {
            name:"Nihal 3",
            position:"React Developer",
            email:"123@gmail.com",
            id:3
        },
        {
            name:"Nihal 1",
            position:"Full Stack Developer",
            email:"1235@gmail.com",
            id:1
        },
        {
            name:"Nihal 2",
            position:"Mern Stack Developer",
            email:"123@gmail.com",
            id:2
        },
        {
            name:"Nihal 3",
            position:"React Developer",
            email:"123@gmail.com",
            id:3
        },
    ],
    reducers:{
        // login: (state, action) => {
        //     // login()
        // }
    }
})

export default userSlice.reducer