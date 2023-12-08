import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBundlerParams } from "../types/index";

// Define a type for the slice state
interface TransactionState {
  smartAccountAddress: string | undefined;
  pendingTransactions: IBundlerParams[];
  transactions: IBundlerParams[];
}

// Define the initial state using that type
const initialState: TransactionState = {
  smartAccountAddress: undefined,
  pendingTransactions: [],
  transactions: [],
};

export const TransactionState = createSlice({
  name: "transactionstate",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSmartaccountAddress: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.smartAccountAddress = action.payload;
    },
    setPendingTrasactions: (state, action: PayloadAction<IBundlerParams[]>) => {
      state.pendingTransactions = action.payload;
    },
    setTransactions: (state, action: PayloadAction<IBundlerParams[]>) => {
      state.transactions = action.payload;
    },
  },
});

export const {
  setSmartaccountAddress,
  setPendingTrasactions,
  setTransactions,
} = TransactionState.actions;

export default TransactionState.reducer;
