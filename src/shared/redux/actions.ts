import { AppAction } from '../../container/types';
import {
    ActionTypes,
    OnLanguageChangeAction,
    RemoveGeneralError,
    ShowGeneralError,
    UnAuthUser,
} from './types';

export const changeLanguage = (language: string): OnLanguageChangeAction => ({
    type: ActionTypes.on_language_change,
    language: language
});

export const hideProgress = (): AppAction => ({
    type: ActionTypes.hide_progress
});

export const showProgress = (): AppAction => ({
    type: ActionTypes.show_progress
});

export const showGeneralError = (error: string | null = null): ShowGeneralError => ({
    type: ActionTypes.show_general_error,
    error: error
})

export const removeGeneralError = (index: number): RemoveGeneralError => ({
    type: ActionTypes.remove_general_error,
    index: index
})

export const unAuthUser = (msg: string, isValid: boolean): UnAuthUser => ({
    type: ActionTypes.un_auth_user,
    msg: msg,
    isValid: isValid
})
