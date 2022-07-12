import {
   INCREMENT,
   DECREMENT,
} from "./types";

const initialState = 0

export function counterReducer(state = initialState, action) {
   switch (action.type) {
      case INCREMENT:
         return state + 1
      case DECREMENT:
         if (state === -1) { state = 0 }
         return state - 1
      default:
         return state;
   }
}
