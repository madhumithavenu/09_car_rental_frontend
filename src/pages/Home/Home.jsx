import React, { useEffect } from 'react'
import Header from '../../components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home() {
    const cars = useSelector((state) => state.car.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    return (
        <div>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 8">
                    <Item></Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item>xs=4</Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item>xs=4</Item>
                </Box>
                <Box gridColumn="span 8">
                    <Item>xs=8</Item>
                </Box>
            </Box>
        </div>
    )
}

export default Home;