import axios from 'axios';
import { Getwoed } from './getwoed';

async function Getcity(ip) {
    const res = await axios('https://freegeoip.app/json/' + ip );
    Getwoed(res.data.city);
    // console.log(res.data.city);
}

export default Getcity
