import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {signUp} from '../apis/auth';

const theme = createTheme();

const RegisterForm = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Re-Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await signUp(values.email, values.password, values.name);
                navigate('/');
            } catch (error) {
                console.error('Error during sign up:', error);
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ my: 2 }}>
                <Paper elevation={4} style={{ padding: 20, borderRadius: '15px', background: 'white' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box
                                component="img"
                                sx={{
                                    height: { xs: 53, md: 70 },
                                    width: { xs: 53, md: 70 },
                                    display: { xs: 'flex', md: 'flex' },
                                }}
                                alt="Descriptive Alt Text"
                                src="public/assets/logo.png"
                            />
                            <Typography
                                variant="h5"
                                noWrap
                                component={Link}
                                to="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'flex' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#521ce4',
                                    textDecoration: 'none',
                                }}
                            >
                                Zetaton
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                        </Box>
                        <Typography>
                            Already have an account?{' '}
                            <Link to="/login" style={{ color: '#521ce4', fontWeight: 'bolder', textDecoration: 'none' }}>
                                Sign in
                            </Link>
                        </Typography>

                        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="your-name"
                                autoFocus
                                InputLabelProps={{ style: { color: '#000' } }}
                                InputProps={{ style: { color: '#000' } }}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                InputLabelProps={{ style: { color: '#000' } }}
                                InputProps={{ style: { color: '#000' } }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                InputLabelProps={{ style: { color: '#000' } }}
                                InputProps={{ style: { color: '#000' } }}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="rePassword"
                                label="Re-Password"
                                type="password"
                                id="rePassword"
                                autoComplete="current-password"
                                InputLabelProps={{ style: { color: '#000' } }}
                                InputProps={{ style: { color: '#000' } }}
                                value={formik.values.rePassword}
                                onChange={formik.handleChange}
                                error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
                                helperText={formik.touched.rePassword && formik.errors.rePassword}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ borderRadius: '15px', px: '40px', py: '12px', background: 'linear-gradient(to right, #521ce4, #c677e8)' }}
                                >
                                    Sign up
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default RegisterForm;
