// store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/PostSlice/PostsSlice';
import navigationReducer from '../components/PostSlice/navigationSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    navigation: navigationReducer,
  },
});

export default store;
