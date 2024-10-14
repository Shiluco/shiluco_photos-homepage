import { combineReducers } from '@reduxjs/toolkit';
import photoReducer from './photoSlice';
import userProfileReducer from './userProfileSlice';
import uploadPhotoSlice from './uploadPhotoSlice'; 

// すべてのスライスを1つのrootReducerに結合
const rootReducer = combineReducers({
  photo: photoReducer,
  userProfile: userProfileReducer,
  uploadPhoto: uploadPhotoSlice,

});

export default rootReducer;
