import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { templateType } from '@/interface/I_template';
interface TemplateSlice {
  template: string;
}

export const templateReducer = createSlice({
  name: 'template',
  initialState: {
    value: { template: '' } as TemplateSlice,
  },

  reducers: {
    setDate: (state, _action: PayloadAction<templateType>) => ({
      ...state,
      error: '',
    }),
    successful: (state, _action: any) => ({
      ...state,
      value: { ...state.value, ..._action.payload },
      error: '',
    }),
  },
});

export const { setDate, successful } = templateReducer.actions;

export default templateReducer.reducer;
