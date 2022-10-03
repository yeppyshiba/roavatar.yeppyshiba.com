import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@stores/store";

const isInternetReachableSlice = createSlice({
    name: "isInternetReachable",
    initialState: false,
    reducers: {
        set: (state, action: PayloadAction<boolean>) => action.payload,
    },
});

const isServerReachableSlice = createSlice({
    name: "isServerReachable",
    initialState: false,
    reducers: {
        set: (state, action: PayloadAction<boolean>) => action.payload,
    },
});

export default combineReducers({
    isInternetReachable: isInternetReachableSlice.reducer,
    isServerReachable: isServerReachableSlice.reducer,
});

const getConnectionSlice = (state: RootState) => state.connection;

// selectors
export const getIsInternetReachable = (state: RootState) => getConnectionSlice(state).isInternetReachable;
export const getIsServerReachable = (state: RootState) => getConnectionSlice(state).isServerReachable;

// actions
export const setIsInternetReachable = isInternetReachableSlice.actions.set;
export const setIsServerReachable = isServerReachableSlice.actions.set;
