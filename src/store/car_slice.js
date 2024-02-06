import { createSlice } from "@reduxjs/toolkit"

const carSlice = createSlice({
    name: 'car',
    initialState: { cars: [] },
    reducers: {
    }
});

export const carActions = carSlice.actions;
export default carSlice;
