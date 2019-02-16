import React from 'react';
import { AppHeader } from './static/AppHeader';
// import { TileContainer } from './TileContainer';
import { Login } from './Login';

const Home = () => {
  return (
    <div>
      <AppHeader />
      <Login />
      {/* <TileContainer /> */}
    </div>
  )
}

export default Home;