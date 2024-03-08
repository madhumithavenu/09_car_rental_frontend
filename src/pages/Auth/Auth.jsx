import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

function Auth(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  })
  const [isSignup, setIsSignup] = useState(false);

  function handleChange(e) {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  async function sendRequest(type) {
    const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err => {
      if (err.response.request.status === 404) {
        alert("User Does not exist");
        props.setIsLoggedIn(false);
      }
      else if (err.response.request.status === 400) {
        alert("Invalid Password");
        props.setIsLoggedIn(false);
      }
    });

    let data = await res.data;
    return data;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendRequest("signup")
        .then(data => navigate("/auth"))
        .catch(err => "There is some mistake in signup");
    } else {
      sendRequest('login')
        .then(data => localStorage.setItem("userID", data.user._id))
        .then(data => {
          props.setIsLoggedIn(true);
          navigate("/blogs")
        })
        .catch(err => "there is some mistake in login");
    }
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display={"flex"}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
          boxShadow={'10px 10px 20px #ccc'}
          padding={3}
          margin={'auto'}
          marginTop={5}
          borderRadius={5}
          sx={{ ":hover": { boxShadow: '10px 10px 20px #ccc' } }}
          >
          <Typography variant='h2' padding={3} textAlign={'center'}>
            {isSignup ? "Sign Up" : "Login"}
          </Typography>

          {isSignup && <TextField  margin='normal' fullWidth name='name' type={'text'} variant='outlined' onChange={handleChange} value={inputs.name} placeholder='Name' />}
          <TextField margin='normal' fullWidth name='email' type={'email'} variant='outlined' onChange={handleChange} value={inputs.email} placeholder='Email'/>
          <TextField margin='normal' fullWidth name='password' type={'password'} variant='outlined' onChange={handleChange} value={inputs.password} placeholder='Password' />
          <Button endIcon={isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
          type='submit' variant='contained' sx={{ borderRadius: 3, marginTop: 3 }} color='warning'>
            {isSignup ? 'Register' : 'Login'}
          </Button>
          <Button onClick={() => setIsSignup(!isSignup)}  endIcon={isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />} sx={{ borderRadius: 3, marginTop: 3 }}>
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth