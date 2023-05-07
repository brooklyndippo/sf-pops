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
    address, images, title, desc, hours, features, geo,
  } = data[id];

  const featuresList = (
    <ul>
      {features.map((feature) => (
        <li>
          <POPOSFeature feature={feature} showText />
        </li>
      ))}
    </ul>
  );

  const map = (
    <img
      alt="A map showing the location in San Francisco"
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${geo.lat},${geo.lon}&zoom=16&size=600x400&markers=${geo.lat},${geo.lon}&key=API_KEY`}
      className="object-cover w-full h-full"
    />
  );

  return (
    <div className="POPOSFrame">
      <div className="POPOSDetails">
        <div id="space-hero" className="relative mb-32 md:flex md:flex-row-reverse gap-10 md:my-12">
          <img
            src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
            className="object-cover w-[90%] mr-auto max-h-[350px]"
            alt={title}
          />
          <h1 className="bg-white max-w-[400px] h-fit absolute right-0 md:relative text-4xl text-center -my-8 md:my-6 font-black border-[2px] border-black p-4 w-full md:text-left md:p-0 md:pt-20 md:border-l-0 md:border-r-0 md:border-t-0 md:w-fit md:pr-16 md:pb-8 md:border-gray-300 md:border-4">
            {title}
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <p>{desc}</p>
          {featuresList}
          <div className="border mb-10 flex flex-col md:flex-row">
            <div className="w-full md:w-80 h-48 md:h-60 bg-gray-100">{map}</div>
            <div id="location-details" className="p-10 flex flex-col gap-4 justify-around">
              <h2 className="text-lg font-semibold">
                📍
                {address}
              </h2>
              <h3>Hours of operation:</h3>
              <p>{hours ? `🕒 ${hours}` : 'Hours not available.'}</p>
            </div>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
}

export default POPOSDetails;
