// Slice - used to build and define initial state 
// and functions(reducer functions) to update the state

import { createSlice } from "@reduxjs/toolkit"

// 1. Define Initial State

// 2. Define Reducer Functions | Create a Slice

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { payload } = action
            state.user = payload
        }
    }
})

// These are all build and given by createSlice function
// get reducer and rename it to userReducer
const { reducer: userReducer } = userSlice

export default userReducer
