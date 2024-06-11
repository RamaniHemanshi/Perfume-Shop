import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
    
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const dispatch=useDispatch();
    const navigate = useNavigate();
    
    

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password"),
        }

        dispatch(login(userData))

        console.log("userData: ", userData)
    }
    return (
        < div >
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>

                    <Grid item xs={12} >
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                            type={showPassword ? 'text' : 'password'}
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
                        >
                            Login
                        </Button>
                    </Grid>

                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you don't have account ?</p>
                    <Button onClick={() => navigate("/register")} className='ml-5' size='large'>Register</Button>
                </div>
            </div>
        </div >
    )
}

export default LoginForm