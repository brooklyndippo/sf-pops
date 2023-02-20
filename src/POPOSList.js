import POPOSSpace from "./POPOSSpace"
import './POPOSList.css';

function POPOSList() {
    return (
      <div className="POPOSList">
        <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
        />
        <POPOSSpace 
        name="50 California Street"
        address="50 California St."
        image="100-pine.jpg"
        />
        <POPOSSpace 
        name="50 California Street"
        address="50 California St."
        image="101-california.jpg"
        />
        <POPOSSpace 
        name="Sansome Roof Garden"
        address="50 California St."
        image="343-sansome-roof-garden.jpg"
        />
        <POPOSSpace 
        name="Redwood Park"
        address="50 California St."
        image="transamerica-redwood-park.jpg"
        />
        <POPOSSpace 
        name="Embarcadero Center"
        address="50 California St."
        image="embarcadero-center.jpg"
        />
      </div>
    )
}
  
export default POPOSList