import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Container, CssBaseline, Box, Typography, TextField, Button, FormControlLabel, Checkbox, Grid} from "@mui/material";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/context';

const SignIn = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

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
                    Войти
                </Typography>
                <Typography variant="p" align='center'>
                    Авторизация сделано по Казахский. Просто нажмите кнопку войти
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}} onSubmit={login}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Адрес"
                        name="email"
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Пароль"
                        name="password"
                        autoComplete='current-password'
                        autoFocus
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color='primary' />}
                        label="Запомни меня чувак"
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, md: 2, marginBottom: '10px' }}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to='#' style={{fontSize: '.90rem'}}>
                                Забыль пароль, мне пофиг ссылка не работет
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signUp" style={{fontSize: '.90rem'}}>
                                {"У вас нет аккаунта? Зарегистрируйтесь"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
};

export default SignIn;