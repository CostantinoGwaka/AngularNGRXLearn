import { InitialState } from './../../../node_modules/@ngrx/store/src/models.d';
import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1), // two parameter action and function,
    on(decrement, (state) => state - 1),
);

// export function createReducer(state = initialState) {
//     return state;
// }