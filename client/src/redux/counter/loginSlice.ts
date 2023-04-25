import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    user: any,
    token: any,
}

const initialState: CounterState = {
    user: null,
    token: null,
}

export const counterSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<any>) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLogin } = counterSlice.actions

export default counterSlice.reducer