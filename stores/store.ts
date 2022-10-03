import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authentication from "@slices/authentication";
import connection from "@slices/connection";

const rootReducer = combineReducers({
    authentication,
    connection,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
