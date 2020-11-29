import axios from 'axios';

export async function Getwoed(city) {
    const res = await axios('https://cors-anywhere.herokuapp.com/' + 'https://www.metaweather.com/api/location/search/?query=' + city);
    console.log(res);
}
