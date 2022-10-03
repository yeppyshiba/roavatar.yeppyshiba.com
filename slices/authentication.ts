import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@stores/store";

type AuthenticationState = {
    authenticated: boolean;
};

const initialState: AuthenticationState = {
    authenticated: false,
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<AuthenticationState>) => action.payload,
    },
});

export default authenticationSlice.reducer;

// selectors
export const getAuthentication = (state: RootState) => state.authentication;

// actions
export const setAuthentication = authenticationSlice.actions.set;
