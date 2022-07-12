import { CHANGE_THEME, DISABLE_BUTTON, ENABLE_BUTTON } from "./types";

const initialThemeState = { value: 'light', disabled: false, }

export function themeReducer(state = initialThemeState, action) {
   console.log(state, action);
   switch (action.type) {
      case CHANGE_THEME: return { ...state, value: action.payload }

      case DISABLE_BUTTON: return { ...state, disabled: true }

      case ENABLE_BUTTON: return { ...state, disabled: false }

      default: return state;
   }

}