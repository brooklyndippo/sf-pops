import React, { useState } from 'react';

import POPOSSpace from '../POPOSSpace/POPOSSpace';
import data from '../../sfpopos-data';

function POPOSList() {
  const [query, setQuery] = useState('');
  const spaces = data.filter((obj) => {
    // true if query is in title
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
    // true if query is in address
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase());
    // return true if either is true
    return inTitle || inAddress;
  })
    .map(({
      title, address, images, hours, features, id,
    }) => (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
        features={features}
      />
    ));

  return (
    <div>
      <div id="hero" className="relative mb-56">
        <img
          src={`${process.env.PUBLIC_URL}/images/555-california.jpg`}
          className="object-cover pl-10"
          alt="Embarcadero Center"
        />
        <div className="bg-[#CCD9CF] absolute -mt-8 w-5/6 p-6 flex flex-col gap-4">
          <h1 className="text-4xl font-black">SF POPOS</h1>
          <h2 className="text-2xl font-bold">San Francisco Privately Owned Public Spaces</h2>
        </div>
      </div>
      <form className="flex flex-col my-4 gap-4">
        <input
          className="border rounded p-2 w-full"
          value={query}
          placeholder="Search for a space..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button className="bg-gray-100 rounded p-1" type="submit">Search</button> */}
      </form>
      <div className="flex flex-col items-center md:items-stretch md:justify-evenly md:flex-row md:flex-wrap w-full gap-12">
        { spaces }
      </div>
    </div>
  );
}

export default POPOSList;
