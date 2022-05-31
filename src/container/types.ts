import { Action } from 'redux';
import { ActionTypes as SharedActionTypes, SharedState as SharedState } from '../shared/redux/types';

export type AppActionTypes =
    | SharedActionTypes

export interface AppState {
    shared: SharedState;
};

export interface AppAction extends Action<AppActionTypes> { };

export interface AppResultAction extends AppAction {
    hasError: boolean;
};

