import { Box } from "@mui/material";
import React from "react";
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <div className={classes.loader}>

            </div>
        </Box>
    );
};

export default Loader;