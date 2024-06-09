import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as Yup from 'yup';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import {login} from '../apis/auth';
import { useDispatch } from 'react-redux';
import Cookies from "universal-cookie";
import { setToken } from '../pages/store/reducers/userSlice';


const theme = createTheme();

const LoginForm = () => {
    const dispatch = useDispatch();
    const cookie = new Cookies();
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                console.log(values)
                await login(values.email, values.password);
                const userToken =cookie.get('authToken')
                dispatch(setToken(userToken));
                navigate('/');
            } catch (error) {
                console.error('Error during sign up:', error);
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                                    display: { xs: "flex", md: "flex" },
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
                                    display: { xs: "flex", md: "flex" },
                                    flexGrow: 1,
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "#521ce4",
                                    textDecoration: "none",
                                }}
                            >
                                Zetaton
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography component="h1" variant="h5" gutterBottom>
                                Sign in
                            </Typography>
                        </Box>
                        <Typography>
                            Don't have an account?  
                            <Link to="/register" style={{ color: '#521ce4', fontWeight: 'bolder', textDecoration: 'none' }}>
                                Sign up
                            </Link>
                        </Typography>

                        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/forgot-password" style={{ color: '#000', textDecoration: 'none' }}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ borderRadius: '15px', px: '40px', py: '12px', background: 'linear-gradient(to right, #521ce4, #c677e8)' }}
                                >
                                    Sign In
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default LoginForm;
