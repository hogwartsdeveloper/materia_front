import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ImageItem from "./ImageItem";

const ImageList = ({images, title, remove, isLoading}) => {
    if (!images.length && !isLoading) {
        return (
            <Typography
                variant="h2"
                align="center"
                color="textPrimary"
            >
                Картинки не найдены!
            </Typography>
        );
    };

    return (
        <Container>
            <Typography
                variant="h2"
                align="center"
            >
                {title}
            </Typography>
            <Container style={{marginTop: 28}} maxWidth="md">
                <Grid container spacing={4}>
                    {images.map((image, index) =>(
                        <ImageItem image={image} key={index}/>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default ImageList;