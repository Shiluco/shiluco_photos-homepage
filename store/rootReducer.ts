import { combineReducers } from '@reduxjs/toolkit';
// import photoReducer from './photoSlice';
import userProfileReducer from './userProfileSlice';

// すべてのスライスを1つのrootReducerに結合
const rootReducer = combineReducers({
  // photo: photoReducer,
  userProfile: userProfileReducer,

});

export default rootReducer;
