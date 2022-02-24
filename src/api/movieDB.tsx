import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f504ce745585feece56887fe424daed6',
        language: 'es-ES'
    }
});


export default movieDB;