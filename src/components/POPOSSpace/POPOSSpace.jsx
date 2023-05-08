/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import POPOSFeature from '../POPOSFeature/POPOSFeature';

function POPOSSpace(props) {
  const {
    name, address, image, hours, features, id,
  } = props;
  return (
    <div className="border border-gray-200 shadow-md w-full rounded-lg flex flex-col min-[800px]:flex-row min-[800px]:max-h-60">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          className="object-cover h-48 w-full rounded-t-lg min-[800px]:rounded-t-none min-[800px]:rounded-tl-lg min-[800px]:rounded-bl-lg min-[800px]:h-full min-[800px]:max-w-56"
          alt={name}
        />
      </Link>
      <div className="grow p-6 flex flex-col justify-end gap-4">
        <Link to={`/details/${id}`}>
          <h2 className="font-bold text-xl">{name}</h2>
        </Link>
        <h3 className="font-semibold">{address}</h3>
        <div className="hours">{hours ? `🕒 ${hours}` : 'Hours not available.'}</div>
        <div className="flex gap-3">
          {features.map((feature) => (
            <POPOSFeature key={feature} feature={feature} />
          ))}
        </div>
        <Link to={`/details/${id}`} className="grow flex items-end min-[800px]:ml-auto">
          <span className="bg-[#303030] hover:bg-black p-2 px-6 w-full flex items-center text-white justify-center md:justify-end font-bold rounded md:w-fit">
            View Space
          </span>
        </Link>
      </div>
    </div>
  );
}

export default POPOSSpace;
