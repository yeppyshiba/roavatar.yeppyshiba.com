import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "@/models";
import ImmerPlugin from "@rematch/immer";
import SelectPlugin from "@rematch/select";

export const store = init<RootModel>({
    models,
    plugins: [ImmerPlugin(), SelectPlugin()],
});

export const { select } = store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
