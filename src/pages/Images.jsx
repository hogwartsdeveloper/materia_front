import { CardMedia, Container, Grid, ImageListItem, Typography, Card, Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import PixelsService from "../API/PixelsService";
import { useFetching } from "../hooks/useFetching";
import ImageList from "../components/ImageList";

const Images = () => {
    const [images, setImages] = useState([]);

    const [fetchImages, isImagesLoading, imageError] = useFetching(async () => {
        const response = await PixelsService.getAll();
        setImages([...images, ...response.data.photos]);
    });

    useEffect(() => {
        fetchImages();
    }, []);
    return (
        <Container>
            <Container sx={{maxWidth: 'md', marginTop: '100px'}}>
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{textAlign: 'center', color: 'primary'}}
                >
                    For learning Material
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
                <Container>
                    <Grid container justifyContent='center' spacing={2}>
                        <Grid item>
                            <Button variant="outlined">Upload</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined">Download</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <ImageList images={images} title="Images is API"/>
        </Container>
    )
};

export default Images;