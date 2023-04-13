import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib , faUser , faClock , faStar , faCar , faMobile} from '@fortawesome/free-solid-svg-icons'
import './css/services.css';

function Services() {
  return (
    <div id="services">
      <h1> Learn why we are the best </h1>
      <div id="serviceGrid">
        <div class="serviceItem">
          <FontAwesomeIcon icon={faUser} size="2xl" />
          <h2>Expert Personel</h2>
        </div>
        <div class="serviceItem">

          <FontAwesomeIcon icon={faClock} size="2xl" />
          <h2>Always On Time</h2>
        </div>
        <div class="serviceItem">
          <FontAwesomeIcon icon={faStar} size="2xl "/>
          <h2>Satisfaction Guaranteed</h2>
        </div>
        <div class="serviceItem">
          <FontAwesomeIcon icon={faCar} size="2xl"/>
          <h2>Best Cars</h2>
        </div>
        <div class="serviceItem">
          <FontAwesomeIcon icon={faMobile} size="2xl"/>
          <h2>Cross Platform</h2>
        </div>
      </div>
    </div>
  )
}

export default Services;
