import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TopState {
  value: any
}

const initialState: TopState = {
  value: [],
}

export const topSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {
    setTop : (state, action: PayloadAction<string>) => {
        state.value = [...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTop  } = topSlice.actions

export default topSlice.reducer