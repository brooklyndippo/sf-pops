import React, { useState } from 'react';

import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
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
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="POPOSList">
        { spaces }
      </div>
    </div>
  );
}

export default POPOSList;
