import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const ImageItem = ({image, index, remove}) => {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    image={image.src.large}
                    title={image.alt}
                />
                <CardContent>
                    <Typography>
                        {image.alt}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button >Download</Button>
                    <Button>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ImageItem;