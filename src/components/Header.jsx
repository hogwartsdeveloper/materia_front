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
                For learning Material UI
            </Typography>
            <Typography
                sx={{textAlign: 'center', color: 'secondary'}}
                variant="h5"
                paragraph
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Sequi ex mollitia, esse blanditiis iure deleniti a, 
                cum quae deserunt saepe veritatis rerum provident dicta repellendus?
            </Typography>
        </Container>
    );
};

export default Header;