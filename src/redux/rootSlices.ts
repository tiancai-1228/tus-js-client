import { combineReducers } from '@reduxjs/toolkit';
import templateReducer from './slices/TemplateSlice';

export const rootReducer = combineReducers({
  template: templateReducer,
});
