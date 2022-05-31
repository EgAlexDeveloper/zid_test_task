import { AppAction } from "../../container/types";

export enum ActionTypes {
    on_language_change = 'ON_LANGUAGE_CHANGE',

    hide_progress = 'HIDE_PROGRESS',
    show_progress = 'SHOW_PROGRESS',

    show_general_error = 'SHOW_GENERAL_ERROR',
    remove_general_error = 'REMOVE_GENERAL_ERROR',

    un_auth_user = 'UN_AUTH_USER'
}

export interface OnLanguageChangeAction extends AppAction {
    type: ActionTypes.on_language_change,
    language: string;
}

export interface ShowProgressAction extends AppAction {
    type: ActionTypes.show_progress
}

export interface HideProgressAction extends AppAction {
    type: ActionTypes.hide_progress
}

export interface ShowGeneralError extends AppAction {
    type: ActionTypes.show_general_error,
    error: string | null
}

export interface RemoveGeneralError extends AppAction {
    type: ActionTypes.remove_general_error,
    index: number
}

export interface UnAuthUser extends AppAction {
    type: ActionTypes.un_auth_user,
    msg: string,
    isValid: boolean
}

export type CanAccess = { msg: string, isValid: boolean }

export type Action =
    | OnLanguageChangeAction
    | ShowProgressAction
    | HideProgressAction
    | ShowGeneralError
    | RemoveGeneralError
    | UnAuthUser

export class SharedState {
    language: string = 'ar';
    isActiveProgress: boolean = false;
    errors: string[] = [];
    canAccess: CanAccess = { msg: '', isValid: false }
}