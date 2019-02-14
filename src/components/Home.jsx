import React from 'react';
import { TileImage } from './static/TileImage';

const Home = () => {
  const limit = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <div className="row">
        <div className="col col-12" style={{backgroundColor: 'rgb(141, 72, 72)'}}>
          <article style={{color: 'white', height: '60px'}}>
            <header style={{padding: '10px'}}>
              <h4>Make your choice</h4>
            </header>
          </article>
        </div>
      </div>
      <div className="row">
        {limit.map(item =>{
          return (<TileImage />);
        })}
      </div>
    </div>
  )
}

export default Home;