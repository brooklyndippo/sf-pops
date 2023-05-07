import React, { useState } from 'react';

import POPOSSpace from '../POPOSSpace/POPOSSpace';
import data from '../../sfpopos-data';

function POPOSList() {
  const [query, setQuery] = useState('');
  const spaces = data
    .filter((obj) => {
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

  const searchBar = (
    <form className="flex flex-col my-4 gap-4">
      <input
        className="border rounded p-2 w-full"
        value={query}
        placeholder="Search for a space..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );

  return (
    <div>
      <div id="hero" className="relative mb-52 md:mb-10 md:flex md:flex-row-reverse gap-10">
        <img
          src={`${process.env.PUBLIC_URL}/images/555-california.jpg`}
          className="object-cover w-[80%] ml-auto max-h-[450px] md:w-full"
          alt="Embarcadero Center"
        />
        <div className="bg-[#CCD9CF] max-w-[400px] absolute md:relative -mt-8 md:mt-0 w-5/6 p-6 md:p-0 md:bg-transparent flex flex-col justify-center md:min-h-full gap-4">
          <h1 className="text-4xl font-black">SF POPOS</h1>
          <h2 className="text-2xl font-bold">San Francisco Privately Owned Public Open Spaces</h2>
          <div className="hidden md:block">{searchBar}</div>
        </div>
      </div>
      <div className="block md:hidden">{searchBar}</div>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[800px]:grid-cols-3 min-[1100px]:grid-cols-4 gap-8 min-[800px]:gap-10">
        {spaces}
      </div>
    </div>
  );
}

export default POPOSList;
