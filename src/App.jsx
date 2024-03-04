import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import BookingCar from './pages/BookingCar/BookingCar';
import Navbar from './pages/Navbar/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/bookingcar' element={<BookingCar/>}/>
     </Routes>
    </div>
  );
}

export default App;
