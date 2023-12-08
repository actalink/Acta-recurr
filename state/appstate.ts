import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBundlerParams } from "../types/index";

// Define a type for the slice state
interface Appstate {
  refreshPage: boolean;
  previousChain: number | undefined;
  previousSigner: string | undefined;
}

// Define the initial state using that type
const initialState: Appstate = {
  refreshPage: false,
  previousChain: undefined,
  previousSigner: undefined,
};

export const Appstate = createSlice({
  name: "transactionstate",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRefreshPage: (state, action: PayloadAction<boolean>) => {
      state.refreshPage = action.payload;
    },
    setPreviousChain: (state, action: PayloadAction<number | undefined>) => {
      state.previousChain = action.payload;
    },
    setPreviousSigner: (state, action: PayloadAction<string | undefined>) => {
      state.previousSigner = action.payload;
    },
  },
});

export const { setRefreshPage, setPreviousChain, setPreviousSigner } =
  Appstate.actions;

export default Appstate.reducer;
