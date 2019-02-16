import React from 'react';
import { TileImageThreeCol } from './static/TileImage';

export const TileContainer = () => {
  const limit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (<div className="row" style={{paddingTop: '60px'}}>
  {limit.map(item =>{
    return (<TileImageThreeCol
      index={item}
    />);
  })}
</div>)
}
