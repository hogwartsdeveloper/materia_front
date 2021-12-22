import { Container, FormControl, InputBase, InputLabel, MenuItem, Select } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";

const PostFilter = ({filter, setFilter}) => {
    return (
        <Container sx={{display: 'flex', alignItems: 'center'}}>
            <InputBase
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search post"
                style={{
                    width: '90%', 
                    border: '1px solid transperent', 
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15',
                    borderRadius: '8px',
                    padding: '15px',
                    margin: '20px 0 40px 0'
                }}
            />
            <FormControl sx={{width: '10%'}}>
                <InputLabel id="select-label">Сортировка</InputLabel>
                <Select
                    labelId="select-label"
                    label="Сортировка"
                    value={filter.sort}
                    onChange={e => setFilter({...filter, sort: e.target.value})}
                >
                    <MenuItem value='title'>По названию</MenuItem>
                    <MenuItem value='body'>По описанию</MenuItem>
                </Select>
            </FormControl>
        </Container>
    );
};

export default PostFilter;