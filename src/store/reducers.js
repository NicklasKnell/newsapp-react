import * as actions from './actions';
import { dark, light } from '../shared/utils/themes';

export function toggleTheme(state = { theme: dark }, action) {
    switch (action.type) {
        case actions.ACTIVATE_DARKMODE:
            return { ...state, theme: dark };
        case actions.ACTIVATE_LIGHTMODE:
            return { ...state, theme: light };
        default:
            return state;
    }
}
