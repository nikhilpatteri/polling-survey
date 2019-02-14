import React from 'react';

export const TileImageThreeCol = ({ index }) => {
  return (<div class="col col-md-4 col-sm-12" style={{padding: '15px', boxShadow: '3px 3px 17px 0px rgba(191,181,191,1)' }}>
      <div style={{width: '100%', borderRadius: '5px', padding: '20px', backgroundColor: '#66a9a563'}}>
        <div style={{textAlign: 'center'}}>
          <h4>Heading{index}</h4>
        </div>
        <div>
          <p>This is some data</p>
        </div>
    </div>
  </div>)
}