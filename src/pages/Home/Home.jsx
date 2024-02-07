import React, { useEffect } from 'react'
import Header from '../../components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';

function Home() {
    const cars = useSelector((state) => state.car.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <h1>Home</h1>
            <h1>Length of the car {cars.length}</h1>
        </div>
    )
}

export default Home;