import axios from 'axios';
// import Getcity from './getcity';

// const Getip = () => {
//     let [data, setdata] = React.useState('')
//     axios.get('https://api.ipify.org/?format=json')
//         .then(response => { setdata(response.data)});
//     // let data = res.data.ip;
//     console.log(data);
//     return true;
// }

export default async function Getip() {
    const response = await axios('https://api.ipify.org/?format=json');
    return response.data.ip;
    // Getcity(response.data.ip);
    // console.log(response.data.ip);
}
