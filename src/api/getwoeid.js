import axios from 'axios';
import Getcity from './getcity';
// import { Getweather } from './getweather'

export default async function Getwoeid() {
    const city = await Getcity();
    const res = await axios('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=' + city);
    // const res = await axios('https://www.metaweather.com/api/location/search/?query=' + city);
    // console.log(res);
    return res.data[0].woeid;
    // Getweather(res.data[0].woeid);
    // console.log(res.data[0].woeid);
}
