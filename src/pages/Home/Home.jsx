import React, { useEffect, useState } from 'react'
// import Header from '../../components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';

function Home() {
  const cars = useSelector((state) => state.car.cars);
  const dispatch = useDispatch();

  console.log(cars);
  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch]);


  return (
    <>
      {cars.map(car => {
        return <div >
          <Card 
            sx={{
              margin: 2,
              width: 250,
              height: 350,
              borderRadius: 2,
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <img height={"45%"} width="100%" src={car.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.name}
                <Typography>Capacity: {car.capacity}</Typography>
                <Typography>Fuel Type: {car.Feultype}</Typography>
                <Typography>One hour Rent Price : {car.rentPerHour}</Typography>
              </Typography>
            
            {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
        </AccordionSummary>
        <AccordionDetails>
          <Button>Book Now</Button>
        </AccordionDetails>
      </Accordion> */}
      <Button>Book Now</Button>
      </CardContent>
          </Card>
        </div>
      })
      }
    </>
  )
}

export default Home;