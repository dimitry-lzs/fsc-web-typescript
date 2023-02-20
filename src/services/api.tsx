import axios from 'axios';

const API = `http://www.omdbapi.com`;

const request = axios.create({
    baseURL: API,
    params: {
        apikey: '247de336',
    },
});

type OmdbAPIParams = {
    i?: string;
    t?: string;
    type?: 'movie' | 'series' | 'episode';
    y?: string;
    plot?: 'short' | 'full';
    r?: 'xml' | 'json';
    s?: string;
    page?: number;
};

export default {
    call: (params: OmdbAPIParams) => request.get('/', { params }),
};

export { request };
