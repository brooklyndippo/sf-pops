/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import POPOSFeature from '../POPOSFeature/POPOSFeature';

function POPOSSpace(props) {
  const {
    name, address, image, hours, features, id,
  } = props;
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="300"
          height="300"
          alt={name}
        />
      </Link>
      <div className="card-details">
        <Link to={`/details/${id}`}>
          <h1>{name}</h1>
        </Link>
        <div>{address}</div>
        <div className="hours">
          {hours ? `🕒 ${hours}` : 'Hours not available.' }
        </div>
        <div className="features">
          { features.map((feature) => (
            <POPOSFeature key={feature} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default POPOSSpace;
