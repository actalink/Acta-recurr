import { configureStore } from "@reduxjs/toolkit";
import { TransactionState } from "../state/transactionState";
import { Appstate } from "../state/appState";
import { BlockState } from "../state/blockState";

export const store = configureStore({
  reducer: {
    transactionState: TransactionState.reducer,
    appState: Appstate.reducer,
    blockState: BlockState.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
