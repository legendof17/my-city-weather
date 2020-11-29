import axios from 'axios';
import Getwoeid from './getwoeid';

export default async function Getweather() {
    const woeid = await Getwoeid();
    const response = await axios('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/' + woeid + '/');
    return response;
    // console.log(response.data.consolidated_weather[0].weather_state_name);
    // console.log(response.data.consolidated_weather[0].weather_state_abbr);
    // console.log(response.data.consolidated_weather[0].humidity);
    // console.log(response.data.consolidated_weather[0].predictability);
    // console.log(response.data.consolidated_weather[0].min_temp);
    // console.log(response.data.consolidated_weather[0].max_temp);
}