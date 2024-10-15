import { combineReducers } from '@reduxjs/toolkit';
import photoReducer from './photoSlice';
import userProfileReducer from './userProfileSlice';
import uploadPhotoSlice from './uploadPhotoSlice'; 
import authSlice from './authSlice';

// すべてのスライスを1つのrootReducerに結合
const rootReducer = combineReducers({
  photo: photoReducer,
  userProfile: userProfileReducer,
  uploadPhoto: uploadPhotoSlice,
  auth: authSlice,

});

export default rootReducer;
