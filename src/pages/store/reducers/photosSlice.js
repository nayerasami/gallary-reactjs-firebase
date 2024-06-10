import { createSlice } from '@reduxjs/toolkit';

export const photosSlice = createSlice({
    name: 'photo',
    initialState: {
        count: 0,
        favoriteList: []
    },
    reducers: {
        addToFavoriteList: (state, action) => {
            state.favoriteList.push(action.payload);
            state.count = state.favoriteList.length;
        },
        removeFromFavoriteList: (state, action) => {
            state.favoriteList = state.favoriteList.filter(
                (photo) => photo.id !== action.payload
            );
            state.count = state.favoriteList.length;
        }
    }
});

export const { addToFavoriteList, removeFromFavoriteList } = photosSlice.actions;
export const favoriteList = (state) => state.photo.favoriteList;
export const count = (state) => state.photo.count;
export default photosSlice.reducer;
