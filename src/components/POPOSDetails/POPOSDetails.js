import React from 'react'
import { useParams } from 'react-router'
import data from '../../sfpopos-data.json'
import './POPOSDetails.css'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

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
            { features.map ((feature) => {
                return(<li>{ feature }</li>)
            })}
          </ul>
          <hr/>
          <p>{ hours ? `🕒 ${hours}` : 'Hours not available.' }</p>
          <p>📍 Latitude{ geo.lat } , Longitude { geo.lon }</p>
        </div>

      </div>
    </div>
  )
}

export default POPOSDetails