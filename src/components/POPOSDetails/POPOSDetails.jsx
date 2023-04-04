import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router';
import data from '../../sfpopos-data';
// eslint-disable-next-line import/no-cycle
import { POPOSFeature } from '..';

import './POPOSDetails.css';

function POPOSDetails() {
  const params = useParams();
  const { id } = params; // Location index
  const {
    images, title, desc, hours, features, geo,
  } = data[id];

  return (
    <div className="POPOSFrame">
      <div className="POPOSDetails">
        <div className="POPOSImage">
          <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
        </div>

        <div className="POPOSContent">
          <h1>{ title }</h1>
          <p>{ desc }</p>
          <p>Features:</p>
          <ul>
            { features.map((feature) => (<li><POPOSFeature feature={feature} showText /></li>))}
          </ul>
          <hr />
          <p>{ hours ? `🕒 ${hours}` : 'Hours not available.' }</p>
          <p>
            📍 Latitude
            { geo.lat }
            {' '}
            , Longitude
            { geo.lon }
          </p>
        </div>

      </div>
    </div>
  );
}

export default POPOSDetails;
