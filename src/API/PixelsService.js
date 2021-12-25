import axios from "axios";

export default class PixelsService {
    static async getAll(limit=10, page=1) {
        const response = await axios.get('https://api.pexels.com/v1/curated', {
            headers: {
                'Authorization': '563492ad6f917000010000017623d9363e7144718875e177313e6c0b'
            },
            params: {
                page: page,
                per_page: limit
            }
        });
        console.log(response.data);
        return response;
    }
};