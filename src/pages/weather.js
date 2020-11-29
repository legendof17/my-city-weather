import React from 'react'
import Weatherdata from '../components/weatherdata'

export const Weather = () => {
    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
            textAlign: 'center',
          }}
          >
            <h1><Weatherdata /></h1>
        </div>
    )
}

export default Weather;