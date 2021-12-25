import { useMemo } from "react"

export const useSortedImages = (images, sort) => {
    const sortedImages = useMemo(() => {
        if (sort) {
            return [...images].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return images;
    }, [sort, images])

    return sortedImages;
}

export const useImages = (images, sort, query) => {
    const sortedImages = useSortedImages(images, sort);

    const sortedAndSearchedImages = useMemo(() => {
        return sortedImages.filter(image => image.alt.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedImages]);

    return sortedAndSearchedImages;
}