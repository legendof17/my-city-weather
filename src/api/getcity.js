import axios from 'axios';
import { Getwoeid } from './getwoeid';

async function Getcity(ip) {
    const res = await axios('https://freegeoip.app/json/' + ip );
    Getwoeid(res.data.city);
    // console.log(res.data.city);
}

export default Getcity
