import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Container, CssBaseline, Box, Typography, TextField, Button, FormControlLabel, Checkbox, Grid, Link } from "@mui/material";
import React from "react";

const SignIn = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete='current-password'
                        autoFocus
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color='primary' />}
                        label="Remember me"
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, md: 2, marginBottom: '10px' }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='#' variant='body2'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
};

export default SignIn;