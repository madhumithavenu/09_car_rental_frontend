import React from 'react'
import { Box,TextField, Typography } from '@mui/material';


function Login() {
  return (
    <div>
      { <Typography
        variant='h5'
        padding={3}
        textAlign={'center'}> Account Created Sucessfully. Please Login!!! </Typography>}
      <form>
        <Box
          display="flex"
          margin={'auto'}
          flexDirection={'column'}
          borderRadius={5}
          maxWidth={400}
          padding={3}
          boxShadow={"5px 5px 10px #ccc"}
          alignItems="center"
          marginTop={5}
          sx={{ ":hover": { boxShadow: '10px 10px 20px #ccc' } }}
        >

          <Typography
            variant='h3'
            padding={3}
            textAlign={'center'}>  Login </Typography>

          {props.isSignUp &&
            <TextField
              margin='normal'
              fullWidth
              name='name'
              type={'text'}
              variant='outlined'
              label="Name"
              value={inputs.name}
              onChange={handleChange}
              error={errorState.name}
              helperText={errorState.name ? 'Enter a valid Username' : ' '}
            />}

          <TextField
            margin='normal'
            fullWidth
            name='email'
            type={'email'}
            variant='outlined'
            label="Email"
            value={inputs.email}
            onChange={handleChange}
            error={errorState.email}
            helperText={errorState.email ? errEmailMessage : ' '}
          />

          <TextField
            margin='normal'
            fullWidth
            name='password'
            type={'password'}
            variant='outlined'
            label="Password"
            value={inputs.password}
            onChange={handleChange}
            error={errorState.password}
            helperText={errorState.password ? errPasswordMessage : ' '}
          />
        </Box>
      </form>

    </div>
  )
}


export default Login;