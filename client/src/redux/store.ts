import { createStore, combineReducers } from "redux";

const appReducer = combineReducers({});

//For logout restart redux
const rootReducer = (state: RootState, action: any) => {
  // Clear all data in redux store to initial
  if (action.type === "DESTROY_SESSION") {
    state = undefined;
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;

type rootReducerType = typeof rootReducer;
export type AppStateReduxType = ReturnType<rootReducerType>;

export const store = createStore(rootReducer);

// for debbuger
declare global {
  interface Window {
    store: any;
  }
}
window.store = store;
//
