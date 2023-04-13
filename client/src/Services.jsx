import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import './css/services.css';

function Services() {
  return (
    <div>
      <h1> Learn why we are the best </h1>
      <div id="serviceGrid">
        <div class="serviceItem">
          <FontAwesomeIcon icon={faPenNib} />
          <h2>Description</h2>
        </div>
      </div>
    </div>
  )
}

export default Services;
