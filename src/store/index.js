import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./car_slice";
import alertSlice from "./alert_slice";
import authSlice from "./auth_slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        car: carSlice.reducer,
        alert: alertSlice.reducer
    }
});

export default store;