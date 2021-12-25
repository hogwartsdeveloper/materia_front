import { Container, InputBase } from "@mui/material";
import React from "react";

const ImageFilter = ({filter, setFilter}) => {
    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <InputBase
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search image"
                style={{
                    width: '90%',
                    border: '1px solid transperent',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15',
                    borderRadius: '8px',
                    padding: '15px',
                    margin: '20px 0 20px 0'
                }}
            />
        </Container>
    );
};

export default ImageFilter;