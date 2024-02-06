import axios from "axios";
import { alertActions } from "./alert_slice.js";


export async function getAllCars() {
    return async (dispatch) => {
        dispatch(alertActions.isLoading(true));

        try {
            const response = await axios.get('/api/cars/getallcars');
            dispatch();
            dispatch(alertActions.isLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(alertActions.isLoading(false));
        }
    }
}