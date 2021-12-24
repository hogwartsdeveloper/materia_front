import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ImageItem = ({image, index, remove}) => {

    console.log(image.src.large)

    function toDataURL(url) {
        return fetch(url).then((response) => {
                return response.blob();
            }).then(blob => {
                return window.URL.createObjectURL(blob);
            });
      }
      
      async function download() {    
          const a = document.createElement("a");
          a.href = await toDataURL(image.src.original);
          a.download = "myImage.jpeg";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      }
      
      

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
                    <Button onClick={() => download()}>Download</Button>
                    <Button>Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ImageItem;