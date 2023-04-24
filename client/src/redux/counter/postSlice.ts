import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  posts: any
}

const initialState: CounterState = {
  posts: [],
}

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

    setPosts: (state, action: PayloadAction<any>) => {
      state.posts = action.payload.posts
    },

    addPosts: (state, action: PayloadAction<any>) => {
      let updatedPosts = [...state.posts, action.payload.post];
      state.posts = updatedPosts;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, addPosts } = counterSlice.actions

export default counterSlice.reducer