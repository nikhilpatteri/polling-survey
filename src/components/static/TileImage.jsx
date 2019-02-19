import React from 'react';
import PropTypes from 'prop-types';

export const TileImageThreeCol = ({ content = {} }) => {
  return (
    <div className="col col-md-6 col-sm-12" style={{ padding: '15px', boxShadow: '3px 3px 17px 0px rgba(191,181,191,1)' }}>
      <div style={{
        width: '100%', borderRadius: '5px', padding: '20px', backgroundColor: '#66a9a563',
      }}
      >
        <div>
          <h6>{content.question}</h6>
        </div>
        {content.options.map(option => {
          return (
            <div className="form-control" key={content.id + option.oId}>
              <input type="checkbox" id={content.id + option.oId} />
              <label htmlFor={content.id + option.oId}>{option.label}</label>
              <div className="float-right">{option.count}</div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

TileImageThreeCol.propTypes = {
  content: PropTypes.shape({
    question: PropTypes.string,
  }).isRequired,
};
