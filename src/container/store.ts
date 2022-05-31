import { applyMiddleware, createStore, Dispatch, Middleware } from 'redux';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import { composeWithDevTools } from "redux-devtools-extension";

import { AppAction, AppState } from './types';
import reducers from '../container/reducers';

const middlewareList: Middleware[] = [];
const enhancers = [applyMiddleware(...middlewareList)];
const initialState = {};

// @ts-ignore
export const store: Store<AppAction> = createStore(reducers, initialState, composeWithDevTools(...enhancers));

export const useDispatch = (): Dispatch<AppAction> => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

