import axios from 'axios';
import { APIURL } from '@env';

const instance = axios.create(
{
    baseURL: APIURL,
    headers:
    {
        'Content-Type': 'application/json'
    }
})

export default instance;