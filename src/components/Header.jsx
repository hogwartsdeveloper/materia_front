import { Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <Container>
            <Typography
                variant="h2"
                gutterBottom
                sx={{textAlign: 'center', color: 'primary'}}
            >
                Это мой гомункул 
            </Typography>
            <Typography
                sx={{textAlign: 'center', color: 'secondary'}}
                variant="h5"
                paragraph
            >
                В проекте используется два API. Примите на работу, а то я буду дальше создовать своих гомункулов.
            </Typography>
        </Container>
    );
};

export default Header;