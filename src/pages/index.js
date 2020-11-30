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
          <h1><Typical 
            loop={Infinity} 
            wrapper="b" 
            steps={[
              'Hello World.', 100,
              'Hello World..', 100, 
              'Hello World..!', 100, 
              'Hello World..! 🎃', 250, 
              'Rotate your phone 🔄', 300, 
              'To see "magic Weather? button" 🕷️', 600
            ]} /></h1>
          {/* <Getcity /> */}
        </div>
    )
}

export default Home;
