import React, { useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";

const AdminForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = formData;
        // Static username and password
        const staticUsername = 'admin123@gmail.com';
        const staticPassword = 'admin123';

        // Check if entered credentials match static username and password
        if (email === staticUsername && password === staticPassword) {
            navigate('/admin');
        } else {
            // Handle invalid credentials, e.g., show error message
            alert('Invalid username or password');
        }
    };

    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
    >
        <Box width="400px" p={4} boxShadow={3}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='current-password'
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
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
                            type='submit'
                            variant='contained'
                            size='large'
                            fullWidth
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </Box>
    );
};

export default AdminForm;
