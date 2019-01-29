import * as actions from './actions';

export function toggleTheme(state = {}, action) {
    switch (action.type) {
        case actions.ACTIVATE_DARKMODE:
            return { ...state, theme: 'dark' };
        case actions.ACTIVATE_LIGHTMODE:
            return { ...state, theme: 'light' };
        default:
            return state;
    }
}
