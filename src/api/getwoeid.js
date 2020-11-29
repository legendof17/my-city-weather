import axios from 'axios';
import { Getweather } from './getweather'

export async function Getwoeid(city) {
    const res = await axios('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=' + city);
    Getweather(res.data[0].woeid);
    // console.log(res.data[0].woeid);
}
