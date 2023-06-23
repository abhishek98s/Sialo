import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  posts: any,
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
      let updatedPosts = [...state.posts, ...action.payload.post];
      state.posts = updatedPosts;
    },

    addComment: (state, action: PayloadAction<any>) => {
      let arr = state.posts.map((c: any) => {
        if (c._id == action.payload.comment.postId) {
          return { ...c, comments: [...c.comments, action.payload.comment.updatedComment] };
        }

        return c
      })

      state.posts = arr
      // let comment = [...state.posts.comments, action.payload.comment];
      // state.posts.comments = comment;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, addPosts, addComment } = counterSlice.actions

export default counterSlice.reducer