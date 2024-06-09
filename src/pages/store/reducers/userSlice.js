import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userData: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        }, clearToken: (state) => {
            state.token = null;
        },
    },
});

export const { setToken, setUserData, clearToken } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
