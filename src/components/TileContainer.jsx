import React from 'react';
import PropTypes from 'prop-types';
import { TileImageThreeCol } from './static/TileImage';

export const TileContainer = ({ limit = [] }) => {
  return (
    <div className="row" style={{ paddingTop: '60px' }}>
      {limit.map(item => {
        return (
          <TileImageThreeCol
            content={item}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

TileContainer.propTypes = {
  limit: PropTypes.arrayOf(PropTypes.object).isRequired,
};
