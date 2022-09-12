import { createModel } from "@rematch/core";
import { RootModel } from "./";

export interface CommonState {
    loading: boolean;
}

export const initialState: CommonState = {
    loading: false,
};

export const common = createModel<RootModel>()({
    state: initialState,
    selectors: (slice) => ({
        state: () => slice,
    }),
    reducers: {
        setLoading(state) {
            state.loading = true;
        },
        clearLoading(state) {
            state.loading = false;
        },
    },
});
