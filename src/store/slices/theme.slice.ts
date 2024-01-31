import { createSlice } from '@reduxjs/toolkit';

export interface ITheme {
  theme: 'dark' | 'light';
}

const initialState: ITheme = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    resetTheme: (state) => {
      state.theme = 'light';
    },
  },
});

export const { changeTheme, resetTheme } = themeSlice.actions;

export default themeSlice.reducer;
