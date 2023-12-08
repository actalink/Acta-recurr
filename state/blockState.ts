import { createSlice } from "@reduxjs/toolkit";

interface BlockState {
  blockNumber: number | undefined;
}

const initialState: BlockState = {
  blockNumber: undefined,
};

export const BlockState = createSlice({
  name: "blockstate",
  initialState,
  reducers: {
    setBlock: (state, action) => {
      state.blockNumber = action.payload;
    },
  },
});