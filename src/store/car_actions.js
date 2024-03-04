import axios from "axios";
import { alertActions } from "./alert_slice.js";
import { carActions } from "./car_slice.js";


export function getAllCars() {
    return async (dispatch) => {
        dispatch(alertActions.isLoading(true));
        try {
            const res = await axios.get('/api/cars/getallcars');
            const data = await res.data;
            console.log(data);
            dispatch(carActions.getAllCars(data.cars));
            dispatch(alertActions.isLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(alertActions.isLoading(false));
        }
    }
}