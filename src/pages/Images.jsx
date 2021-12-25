import { Container, Grid, Typography, Button} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import PixelsService from "../API/PixelsService";
import { useObserver } from "../hooks/useObserver";
import { getPageCount } from "../utils/pages";
import ImageList from "../components/ImageList";
import Loader from "../components/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { useImages } from "../hooks/useImages";
import ImageFilter from "../components/ImageFilter";

const Images = () => {
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef()
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedImages = useImages(images, filter.sort, filter.query);

    const [fetchImages, isImagesLoading, imageError] = useFetching(async (limit, page) => {
        const response = await PixelsService.getAll(limit, page);
        setImages([...images, ...response.data.photos]);

        const totalCount = response.data.total_results;
        setTotalPages(getPageCount(totalCount, limit));
    });


    useObserver(lastElement, page < totalPages, isImagesLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchImages(limit, page);
        
    }, [page, limit]);


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
                <ImageFilter filter={filter} setFilter={setFilter}/>
            </Container>
            <ImageList images={sortedAndSearchedImages} title="Images is API"/>
            <Container ref={lastElement} style={{height: '10px'}} />
            {isImagesLoading && <Loader/>}
        </Container>
    )
};

export default Images;