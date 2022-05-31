import { Reducer } from 'redux';
import { SharedState, ActionTypes, Action } from './types';

const initialState: SharedState = new SharedState();

const sharedReducer: Reducer<SharedState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.on_language_change:
            document.querySelector("HTML")?.setAttribute("dir", action.language === "ar" ? "rtl" : "ltr");
            document.querySelector("HTML")?.setAttribute("lang", action.language);
            localStorage.setItem("lang", action.language);

            return {
                ...state,
                language: action.language
            };

        case ActionTypes.hide_progress:
            return {
                ...state,
                isActiveProgress: false
            };

        case ActionTypes.show_progress:
            return {
                ...state,
                isActiveProgress: true
            };
        case ActionTypes.show_general_error:
            state.errors.push(action.error!);

            return {
                ...state,
                errors: [...state.errors]
            };
        case ActionTypes.remove_general_error:
            state.errors.splice(action.index, 1);

            return {
                ...state,
                errors: [...state.errors]
            };
        case ActionTypes.un_auth_user:
            return {
                ...state,
                canAccess: {
                    msg: action.msg,
                    isValid: action.isValid
                }
            }
        default:
            return state;
    }
};

export default sharedReducer;