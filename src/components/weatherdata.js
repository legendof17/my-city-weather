import React, { Component } from 'react'
import Getweather from '../api/getweather';

export default class Weatherdata extends Component {
    state = {
        loading: true,
        weather: null,
        weather_abbr: null,
        humidity: null,
        predictability: null,
        min_temp: null,
        max_temp: null,
    }
async componentDidMount() {
    const response = await Getweather();
    // console.log(response);
    this.setState({
        weather : response.data.consolidated_weather[0].weather_state_name,
        weather_abbr : response.data.consolidated_weather[0].weather_state_abbr,
        humidity : response.data.consolidated_weather[0].humidity,
        predictability : response.data.consolidated_weather[0].predictability,
        min_temp : response.data.consolidated_weather[0].min_temp,
        max_temp : response.data.consolidated_weather[0].max_temp,
        loading : false,
    })
}

    render() {
        return (
            <div>
                {this.state.loading || !this.state.weather ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <div>{this.state.weather}</div>
                        <div>{this.state.humidity}</div>
                        <div>{this.state.predictability}</div>
                        <div>{this.state.min_temp}</div>
                        <div>{this.state.max_temp}</div>
                    </div>
                )}
            </div>
        )
    }
}
