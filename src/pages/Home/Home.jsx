import React from 'react'
import Header from '../../components/Header/Header.jsx';
import { useSelector } from 'react-redux';

function Home() {
    const cars = useSelector((state)=>state.car.cars);
  
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <h1>Length of the car {cars.length}</h1>
        </div>
    )
}

export default Home;