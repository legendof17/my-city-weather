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
            width: '100%',
          }}
          >
            <Weatherdata />
        </div>
    )
}

export default Weather;