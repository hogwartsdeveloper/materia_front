import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const SignUp = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: '100px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center'
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <Box component="div" sx={{display: 'flex'}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            autoComplete='name'
                            autoFocus
                            sx={{paddingRight: '10px'}}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="soName"
                            label="Your So Name"
                            name="soName"
                            autoComplete='soName'
                            autoFocus
                        />
                    </Box>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Your Email"
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, md: 2, marginBottom: '10px' }}
                    >
                        Sign Up
                    </Button>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to="/signIn">
                            You have an account? Sign In
                        </Link>
                    </Box>
                    
                </Box>
            </Box>
        </Container>
    )
};

export default SignUp;