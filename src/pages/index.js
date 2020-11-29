import React from 'react';
import Getip from '../api/getip';

Getip();
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
          <h1>Home World</h1>
          {/* <Getcity /> */}
        </div>
    )
}

export default Home;
