import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Grid, IconButton, InputAdornment, TextField} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setFormValid] = useState(true);
  const [error, setError] = useState(null);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(store => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  // const handleFieldChange = (event) => {
  //   // Your existing logic for field change
  
  //   // Validate fields and set the form validity
  //   setFormValid(event.currentTarget.checkValidity());
  // };

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    }

    dispatch(register(userData));

    console.log("userData: ", userData)    
};

const handleChange = (event) => {
  // Your existing logic for field change
  const { id, value } = event.target;

  // Validate fields and set the form validity
  setFormValid(event.currentTarget.checkValidity());

  // Check if email already exists
  if (id === 'email' && auth.users) {
    const isEmailExists = auth.users.some(user => user.email === value);
    setError(isEmailExists ? "Email already exists" : null);
  }
};
  return (
    < div >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='First Name'
              fullWidth
              autoComplete='given-name'
              inputProps={{ minLength: 2, maxLength: 30 }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              autoComplete='given-name'
              inputProps={{ minLength: 2, maxLength: 30 }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email'
              type='email'
              onChange={handleChange}
              error={!!error}
              helperText={error}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              fullWidth
              autoComplete='password'
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleTogglePasswordVisibility}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className='bg-[#9155FD] w-full'
              type='submit'
              variant='contained'
              size='large'
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
              disabled={!isFormValid}
            >
              Register
            </Button>
          </Grid>

        </Grid>
      </form>

      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>if you have already account ?</p>
          <Button onClick={() => navigate("/login")} className='ml-5' size='large'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm