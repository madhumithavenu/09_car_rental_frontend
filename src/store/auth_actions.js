import axios from "axios";
import { alertActions } from "./alert_slice.js";


export function login(reqObj) {
    return async (dispatch) => {
        dispatch(alertActions.isLoading(true));
        try {
            const res = await axios.post('/api/user/login',reqObj);
            const data = await res.data;
            console.log(data);
            localStorage.setItem('user', JSON.stringify(res.data))
            // dispatch(carActions.getAllCars(data.cars));
            dispatch(alertActions.isLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(alertActions.isLoading(false));
        }
    }
}
export function signup(reqObj) {
    return async (dispatch) => {
        dispatch(alertActions.isLoading(true));
        try {
            const res = await axios.post('/api/user/signup',reqObj);
            const data = await res.data;
            console.log(data);
            localStorage.setItem('user', JSON.stringify(res.data))
            // dispatch(carActions.getAllCars(data.cars));
            dispatch(alertActions.isLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(alertActions.isLoading(false));
        }
    }
}