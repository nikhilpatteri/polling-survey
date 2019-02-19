import React from 'react';

export const AppHeader = () => {
  return (
    <div className="row">
      <div
        className="col col-12"
        style={{
          backgroundColor: 'rgb(141, 72, 72)', boxShadow: 'black 0px 1px 4px 0px', zIndex: '1', position: 'fixed',
        }}
      >
        <article style={{ color: 'white', height: '60px' }}>
          <header style={{ padding: '10px' }}>
            <h4>Make your choice</h4>
          </header>
        </article>
      </div>
    </div>
  );
};
