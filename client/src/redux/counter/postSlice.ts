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

    pushPosts: (state, action: PayloadAction<any>) => {
      state.posts = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { pushPosts } = counterSlice.actions

export default counterSlice.reducer