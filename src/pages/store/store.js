import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import photosSlice from './reducers/photosSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    photo:photosSlice
  },
});
