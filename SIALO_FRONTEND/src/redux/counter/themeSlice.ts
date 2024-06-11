import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    mode: string
}

const initialState: CounterState = {
    mode: "dark",
}

export const counterSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state) => {
            state.mode = state.mode == "light" ? "light" : "dark";
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme } = counterSlice.actions

export default counterSlice.reducer;