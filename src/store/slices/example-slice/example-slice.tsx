import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface exampleSlice {
  value: string;
}

const initialState: exampleSlice = {
  value: 'test',
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
