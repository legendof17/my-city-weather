import React, { Component } from 'react'
import Getweather from '../api/getweather';
import Typical from 'react-typical';
import styled from 'styled-components';

export default class Weatherdata extends Component {
    state = {
        loading: true,
        city: null,
        weather: null,
        weather_abbr: null,
        image: null,
        humidity: null,
        predictability: null,
        min_temp: null,
        max_temp: null,
    }
async componentDidMount() {
    const response = await Getweather();
    // console.log(response);
    this.setState({
        city : response.data.title,
        weather : response.data.consolidated_weather[0].weather_state_name,
        weather_abbr : response.data.consolidated_weather[0].weather_state_abbr,
        image : 'https://www.metaweather.com/static/img/weather/' + response.data.consolidated_weather[0].weather_state_abbr + '.svg',
        humidity : response.data.consolidated_weather[0].humidity,
        predictability : response.data.consolidated_weather[0].predictability,
        min_temp : response.data.consolidated_weather[0].min_temp,
        max_temp : response.data.consolidated_weather[0].max_temp,
        loading : false,
    })
}

loadinganim = {
    a : 'loading.\\', 
    b : 'loading.|',
    c : 'loading./',
    d : 'loading.-'};
    render() {
        // var divstyle = {
        //     backgroundImage: 'url(' + this.state.image + ')',
        //     'background-repeat': 'no-repeat',
        //     'background-size': 'auto'
        // };
        return (
            // <div style={divstyle} >
            <div>
                {this.state.loading || !this.state.weather ? (
                    // <div><h1>loading...</h1></div>
                    
                    <div><h1><Typical 
                        loop={Infinity}
                        wrapper="b"
                        steps={[this.loadinganim.a, 50, this.loadinganim.b, 50, this.loadinganim.c, 50, this.loadinganim.d, 50]} /></h1>
                    </div>
                ) : (
                    <div>
                        <div style={{'margin-top': '10px', 'margin-bottom': '10px'}}>
                            <img src={this.state.image} alt='Weather Image' width='320' /><br />
                        </div>
                        <div>
                            <div>
                                <hr />
                                <div><b>City</b> : {this.state.city}</div>
                                <div><b>Weather</b> : {this.state.weather}</div>
                                <div><b>Humidity</b> : {this.state.humidity}💧</div>
                                <div><b>Prediction</b> : {this.state.predictability}%</div>
                                <hr />
                                <b>Temperature:</b>
                                <div><b>Min</b> : {this.state.min_temp}°C  |  <b>Max</b> : {this.state.max_temp}°C</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
