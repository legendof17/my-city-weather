import axios from 'axios';

async function Getcity(ip) {
    const res = await axios('https://freegeoip.app/json/' + ip );
    console.log(res.data.city);
}

export default Getcity
