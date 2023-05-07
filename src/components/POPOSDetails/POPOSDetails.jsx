import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router';
import data from '../../sfpopos-data';
// eslint-disable-next-line import/no-cycle
import { POPOSFeature } from '..';

import BackButton from '../BackButton/BackButton';

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
          <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
        </div>
        <div className="POPOSContent">
          <h1 className="bg-white text-4xl text-center my-6 font-black border-[2px] border-black p-4 w-full md:text-left md:p-0 md:pt-20 md:border-l-0 md:border-r-0 md:border-t-0 md:w-fit md:pr-16 md:pb-8 md:border-gray-300 md:border-4">
            {title}
          </h1>
          <p>{desc}</p>
          <p>Features:</p>
          <ul>
            {features.map((feature) => (
              <li>
                <POPOSFeature feature={feature} showText />
              </li>
            ))}
          </ul>
          <div className="border p-10">
            <p>{hours ? `🕒 ${hours}` : 'Hours not available.'}</p>
            <p>
              📍 Latitude
              {geo.lat}
              {' '}
              , Longitude
              {geo.lon}
            </p>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
}

export default POPOSDetails;
