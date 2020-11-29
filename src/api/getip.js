import { render } from '@testing-library/react';
import axios from 'axios';

const Getapi = () => {
    axios.get('https://api.ipify.org/?format=json')
    .then(res => {
        // console.log(res.data.ip);
        render(
            <h1>{res.data.ip}</h1>
        )          
        // return res.data.ip;
    });
    return true;
}

export default Getapi
