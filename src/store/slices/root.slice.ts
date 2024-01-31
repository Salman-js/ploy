import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth.slice';
import themeSlice from './theme.slice';
export const rootReducer = combineReducers({
  auth: authSlice,
  theme: themeSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
