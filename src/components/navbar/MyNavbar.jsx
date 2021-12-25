import React, { useContext } from "react";
import { AppBar, Button, Container, Typography, Box, Menu, MenuItem, Toolbar, IconButton, createTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { useStyles } from "./navbarStyle";
import { AuthContext } from "../../context/context";


const pages = [
    {name: "Posts", path: "/posts"},
    {name: "Photos", path: "/photos"},
    {name: "About", path: "/about"}
];

const theme = createTheme()

const MyNavbar = () => {
    const {setIsAuth} = useContext(AuthContext);
    const classes = useStyles(theme);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    const router = useNavigate()
    
    return (
        <AppBar className={classes.navbar}>
            <Container>
                <Toolbar>
                    <Typography
                        className={classes.logoP}
                        variant="h6"
                    >
                        <Link to="/" className={classes.link}>MATERIA</Link>
                    </Typography>
                    <Box sx={{ display: {xs: 'none', md: 'flex'}}} className={classes.menuBox}>
                        {pages.map(page => 
                            <Button 
                                key={page.path}
                                color="inherit"
                            >
                                <Link
                                    to={page.path}
                                    className={classes.link}
                                >
                                    {page.name}
                                </Link>
                            </Button>
                         )}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }} className={classes.menuBox}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none'} }}
                        >
                            {pages.map((page) => 
                                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                    <Typography>
                                        <Link to={page.path} className={classes.linkMenu}>
                                            {page.name}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                    <Box className={classes.boxButton}>
                        <Button sx={{mr: 2}} color="inherit" onClick={() => router('/signIn')}>Sign In</Button>
                        <Button color="inherit" variant="outlined" onClick={() => router('/signUp')}>Sign Up</Button>
                        <Button sx={{mr: 2}} color="inherit" onClick={logout}>Logout</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyNavbar;