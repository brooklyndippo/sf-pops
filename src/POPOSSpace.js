import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, address, image, hours } = props;
  return (
    <div className='POPOSSpace'>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt={name}
      />
      <h1>{name}</h1>
      <div>{address}</div>
      <div className="hours">
        {hours ? `🕒 ${hours}` : 'Hours not available.' }
      </div>
    </div>
  )
}

export default POPOSSpace
