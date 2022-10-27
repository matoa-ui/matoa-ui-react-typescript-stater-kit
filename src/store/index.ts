import { combineReducers } from '@reduxjs/toolkit';
import { all, fork } from 'redux-saga/effects';
import { InjectedReducersType } from '../utils/types/injector-typings';
import { reducer as Common } from './common/slice';
import { usersSaga } from './userManagement/saga';
import { reducer as Users } from './userManagement/slice';

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    Common,
    Users,
    ...injectedReducers,
  });
}

export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
