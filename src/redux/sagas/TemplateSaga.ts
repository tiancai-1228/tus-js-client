import { takeLatest, put } from '@redux-saga/core/effects';
import { setDate, successful } from '../slices/TemplateSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { templateType } from '@/interface/I_template';
// handler

function* handelTest(action: PayloadAction<templateType>) {
  const { templateData } = action.payload;
  yield put(successful({ template: templateData }));
}

// watcher
export function* watchHandelTest() {
  yield takeLatest(setDate, handelTest);
}
