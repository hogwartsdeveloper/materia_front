import React from "react";
import { AppBar, Button, Container, Typography, Box, Menu, MenuItem, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";

const pages = ["Posts", "About"];

const MyNavbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: 'flex'}}
                    >
                        MATERIA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button 
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block'}}
                            >{page}</Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <Button sx={{my: 2, mr: 2, display: 'block'}} color="inherit">Log In</Button>
                        <Button sx={{my: 2, display: 'block'}} color="inherit" variant="outlined">Sig In</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyNavbar;