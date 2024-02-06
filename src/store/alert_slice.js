import { createSlice } from "@reduxjs/toolkit";


const alertSlice = createSlice({
    name: 'alert',
    initialState: { loading: false },
    reducers:{
        isLoading(draft, action){
            draft.loading = action.payload.loading;
        }
    }
});

export const alertActions = alertSlice.actions;
export default alertSlice;