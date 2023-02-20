import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, address, image, hours, id } = props;
  return (
    <div className='POPOSSpace'>
      <Link to={`/details/${id}`}>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
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
      </div>
    </div>
  )
}

export default POPOSSpace
