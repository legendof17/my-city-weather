import axios from 'axios';
import Getip from './getip';
// import { Getwoeid } from './getwoeid';

export default async function Getcity() {
    const ip = await Getip();
    const res = await axios('https://freegeoip.app/json/' + ip );
    return res.data.city;
    // Getwoeid(res.data.city);
    // console.log(res.data.city);
}
