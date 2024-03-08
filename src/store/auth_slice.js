import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
        login(draft, action) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    }
});

const carSlice = createSlice({
    name: 'car',
    initialState: { cars: [] },
    reducers: {
        getAllCars(draft, action) {
            draft.cars = action.payload;
        }
    }
});

const errorReducer = (state, action) => {
    switch (action.type) {
      case 'NAME':
        return { ...state, name: true };
      case 'EMAIL':
        return { ...state, email: true };
      case 'PASSWORD':
        return { ...state, password: true };
      case 'PROFILE':
        return { ...state, profile: true };
      case 'RESET':
        return { name: false, email: false, password: false, profile: false };
      default:
        throw new Error();
    }
  };


export const authActions = authSlice.actions;
export default authSlice;

