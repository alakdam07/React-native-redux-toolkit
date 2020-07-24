import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import rootReducer, { RootState } from "./reducers/index";

const store = configureStore({
  "reducer": rootReducer,
  "middleware": [...getDefaultMiddleware()]
});

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
