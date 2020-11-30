import React from 'react';
import Typical from 'react-typical';
// import Getweather from '../api/getweather';
// import Getip from '../api/getip';

// Getip();
// Getweather();
export const Home = () => {
    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
          }}
          >
          {/* <h1>Home World<br /></h1> */}
          <Typical loop={Infinity} wrapper="b" steps={['Hello World..! 👋🏻', 250, 'Rotate your phone 🔄', 300, 'To see "magic whether button" 🕷️', 600]} />
          {/* <Getcity /> */}
        </div>
    )
}

export default Home;
