import { createSlice } from "@reduxjs/toolkit"

const carSlice = createSlice({
    name: 'car',
    initialState: { cars: [] },
    reducers: {
        getAllCars(draft, action) {
            draft.cars = action.payload;
        }
    }
});

export const carActions = carSlice.actions;
export default carSlice;
