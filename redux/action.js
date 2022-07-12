import {
   INCREMENT,
   DECREMENT,
   CHANGE_THEME,
   DISABLE_BUTTON,
   ENABLE_BUTTON
} from "./types"

export function increment() {
   return { type: INCREMENT }
}

export function decrement() {
   return { type: DECREMENT }
}

export function disableButton() {
   return { type: DISABLE_BUTTON }
}

export function enableButton() {
   return { type: ENABLE_BUTTON }
}

export function changeTheme() {
   return {
      type: CHANGE_THEME,
      payload: newTheme,
   }
}

export function asyncIncrement() {
   return function (dispatch) {
      dispatch(disableButton())
      setTimeout(() => {
         dispatch(increment())
         dispatch(enableButton())
      }, 1500);
   }

}